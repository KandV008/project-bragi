'use server';

import { OrderEntity } from "@/app/model/entities/order/Order";
import { IVA_ACCESSORY_PRODUCT, IVA_EARPHONE_PRODUCT } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTOConfiguration";
import { getOrder } from "@/db/order/order";
import puppeteer from 'puppeteer';
import { getDateValue, getSpanishHourValue } from "./utils";
import { ShoppingProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO";

/**
 * Generates a base64-encoded PDF receipt from an order ID.
 * 
 * @param {string} id - The ID of the order to generate the receipt for.
 * @returns {Promise<string>} - A base64-encoded PDF string.
 */
export default async function createReceipt(id: string): Promise<string> {
    const order: OrderEntity = await getOrder(id);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const htmlContent = await generateContent(order);

    await page.setContent(htmlContent)
    await page.emulateMediaType('screen')

    const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
    });

    await browser.close();

    const buffer = Buffer.from(pdfBuffer);
    return buffer.toString('base64');
}

/**
 * Generates the complete HTML content for the PDF based on the order.
 * 
 * @param {OrderEntity} order - The order data used to populate the receipt.
 * @returns {Promise<string>} - The full HTML content for the PDF.
 */
export async function generateContent(order: OrderEntity): Promise<string> {
    const headerContent = generateHeader(order);
    const bodyContent = generateBody(order);
    const footerContent = generateFooter(order);

    return `
        <!DOCTYPE html>
        <html>
            <head>
                ${stylesContent}
            </head>
            <body>
                ${headerContent}
                ${bodyContent}
                ${footerContent}
            </body>
        </html>
    `
}

/**
 * Generates the header section of the receipt.
 * 
 * @param {OrderEntity} order - The order data.
 * @returns {string} - HTML string for the header section.
 */
function generateHeader(order: OrderEntity): string {
    return `
        <div class="header">
            <div class="column">
                <p><strong>INTERVISION EXPERT BENIDORM</strong></p>
                <p>B54584552</p>
                <p>C/ Gambo, 2 - Bajo, 03503, BENIDORM</p>
                <p>965 859 577 / 735 088 895</p>
            </div>
            <div class="column" style="text-align: right;">
                <p><strong>${order.firstName}, ${order.userName}</strong></p>
                <p>${order.address}</p>
                <p>${order.dni}</p>
                <p>${order.phoneNumber}</p>
            </div>
        </div>
    `
}

/**
 * Generates the main body of the receipt, including product details.
 * 
 * @param {OrderEntity} order - The order data.
 * @returns {string} - HTML string for the body section.
 */
function generateBody(order: OrderEntity): string {
    const invalidProducts = order.invalidProducts

    const checkIfIsInvalidProduct = (currentProduct: ShoppingProductDTO) => {
        return invalidProducts.find((productToCompare) => {
            return currentProduct.name === productToCompare.name
        })
    }

    const formattedDate = getDateValue(order.creationDate) + " " + getSpanishHourValue(order.creationDate);
    const productRows = order.products.map(product => (
        `
            <tr>
                <td>${product.id}</td>
                <td>${product.name} ${checkIfIsInvalidProduct(product) ? "*" : ""}</td>
                <td>${product.quantity}</td>
                <td>${product.price.toFixed(2)} €</td>
                <td>${(product.price * product.quantity).toFixed(2)} €</td>
                <td>${product.discountPrice != null ? (((product.price - product.discountPrice) /  product.price) * 100).toFixed(0) : '0.00'}%</td>
                <td>${((product.category === "EARPHONE" ? IVA_EARPHONE_PRODUCT : IVA_ACCESSORY_PRODUCT) * 100)}%</td>
                <td>${product.discountPrice != null
            ? (product.discountPrice * product.quantity).toFixed(2)
            : (product.price * product.quantity).toFixed(2)
        } € ${checkIfIsInvalidProduct(product) ? "**" : ""}</td>
            </tr>
    `
    )).join('');

    return `
        <div class="info-block">
            <p><strong>Nº Factura:</strong> ${order.id}</p>
            <p><strong>Fecha:</strong> ${formattedDate}</p>
            <p><strong>Código Cliente:</strong> ${order.userId}</p>
            <p><strong>Codigo de Oferta aplicado:</strong> ${order.bargainApplied ? order.bargainApplied : "Ninguno"}</p>

        </div>

        <table class="invoice-table">
            <thead>
                <tr>
                    <th>COD. ARTÍCULO</th>
                    <th>DESCRIPCIÓN</th>
                    <th>UDS.</th>
                    <th>PRECIO TARIFA UND.</th>
                    <th>IMPORTE TARIFA</th>
                    <th>DTO. %</th>
                    <th>IVA</th>
                    <th>IMPORTE TOTAL</th>
                </tr>
            </thead>
            <tbody>
                ${productRows}
            </tbody>
        </table>
        <p><small><strong>*</strong> Este producto no será cobrado a priori al tener una forma CIC y/o BTE, ya que es necesario realizar un molde personalizado para el cliente. Contactaremos contigo para acordar una cita.</small></p>
        <p><small><strong>**</strong> Al tratarse de un audífono con forma CIC y/o BTE, el precio que se muestra es el del audífono únicamente. No incluye el coste del molde personalizado. El precio presente no será aplicado a la suma total.</small></p>
    `;
}

/**
 * Generates the footer of the receipt, including warranty and payment information.
 * 
 * @param {OrderEntity} order - The order data.
 * @returns {string} - HTML string for the footer section.
 */
function generateFooter(order: OrderEntity): string {
    return `
        <div class="footer">
            <table class="footer-table">
            <thead>
                <tr>
                <th>Observaciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>
                    Información garantía:
                    <ul>
                    <li>Garantía de reparación de 3 años en audífonos</li>
                    <li>Rotura de auricular = 65,95€</li>
                    <li>Rotura de cargador = 299€</li>
                    </ul>
                </td>
                </tr>
            </tbody>
            </table>

            <table class="footer-table">
            <thead>
                <tr>
                <th>Forma de Pago</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Tarjeta de Crédito</td>
                </tr>
                ${
                    order.invalidProducts && order.invalidProducts.length !== 0 
                    ? `<tr><td>Los productos marcados con '*' serán cobrados cuando se realicen los correspondientes moldes, siendo posible cambiar la forma de pago.</td></tr>` 
                    : ""
                }
            </tbody>
            </table>
        </div>
    `
}

const stylesContent = `
    <style>
        .header {
            display: flex;
            justify-content: space-between;
            padding: 20px;
            border-bottom: 2px solid #000;
        }
        .column {
            width: 45%;
        }
        .column p {
            margin: 4px 0;
        }
        .info-block {
            padding: 20px;
            border-bottom: 1px solid #ccc;
        }
        .info-block p {
            margin: 6px 0;
        }
        .invoice-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            font-size: 14px;
        }
        .invoice-table th, .invoice-table td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
        }
        .invoice-table thead {
            background-color: #f0f0f0;
            font-weight: bold;
        }
        .footer {
            display: flex;
            justify-content: space-between;
            margin-top: 40px;
            padding: 20px;
            border-top: 2px solid #000;
            font-size: 14px;
        }
        .footer-table {
            width: 45%;
            border-collapse: collapse;
        }
        .footer-table th, .footer-table td {
            border: 1px solid #ccc;
            padding: 10px;
            vertical-align: top;
        }
        .footer-table th {
            background-color: #f0f0f0;
            text-align: left;
        }
        .footer-table td ul {
            margin: 0;
            padding-left: 18px;
        }
        hr {
            border: none;
            border-top: 2px solid #000;
            margin: 30px 0;
        }
    </style>
`
