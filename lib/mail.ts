'use server';

import nodemailer from "nodemailer";
import { parseAppointmentForm, parseContactForm, parseSendAudiometryFileForm, parseShoppingForm } from "./parser/parser";
import { Logger } from "@/app/config/Logger";
import createReceipt from "./receipt";
import { getOrder } from "@/db/order/order";

require("dotenv").config({ path: ".env.local" });

const CONTEXT = "EMAIL"

/**
 * Creates a transporter for sending emails using Nodemailer.
 */
const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    secure: true,
    requireTLS: true,
    port: 465,
    debug: true,
    connectionTimeout: 10000,
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
    },
});

/**
 * Sends a contact email with the provided form data.
 *
 * @param {FormData} formData - The form data containing email, subject, and body.
 * @returns {Promise<void>} A promise that resolves when the email is sent.
 */
export async function sendContactEmail(formData: FormData): Promise<void> {
    Logger.startFunction(CONTEXT, "sendContactEmail")

    const { email, subject, body } = parseContactForm(formData)

    const info = await transporter.sendMail({
        from: "contact@audifonosxmenos.com",
        to: "contact@audifonosxmenos.com",
        subject: "Contacto: " + subject,
        text: "Correo electrónico: " + email + "\nCuerpo del Mensaje: " + body,
    });

    Logger.endFunction(CONTEXT, "sendContactEmail", info.messageId)
}

/**
 * Sends a contact email with the provided form data.
 *
 * @param {FormData} formData - The form data containing email, subject, and body.
 * @returns {Promise<void>} A promise that resolves when the email is sent.
 */
export async function sendAudiometryFileEmail(formData: FormData): Promise<void> {
    Logger.startFunction(CONTEXT, "sendAudiometryFileEmail")

    const { email, body, audiometryFile } = parseSendAudiometryFileForm(formData)

    const audiometryBuffer = Buffer.from(await audiometryFile.arrayBuffer());

    const originalFileName = `audiometría-${email}`;
    const sanitizedFileName = originalFileName.replace(/[^\w.-]/g, '_');

    const info = await transporter.sendMail({
        from: "contact@audifonosxmenos.com",
        to: "contact@audifonosxmenos.com",
        subject: "Archivo de Audiometría. Se requiere una recomendación.",
        text: "Correo electrónico: " + email + "\nCuerpo del Mensaje: " + body,
        attachments: [
            {
                filename: sanitizedFileName,
                content: audiometryBuffer,
                contentType: audiometryFile.type,
            }
        ],
    });

    Logger.endFunction(CONTEXT, "sendAudiometryFileEmail", info.messageId)
}

/**
 * Sends an appointment email with the provided form data.
 * Extracts user details from the form and sends an email to the contact address.
 *
 * @param {FormData} formData - The form data containing user input.
 * @returns {Promise<void>} - A promise that resolves when the email is sent.
 */
export async function sendAppointmentEmail(formData: FormData): Promise<void> {
    Logger.startFunction(CONTEXT, "sendAppointmentEmail")

    const { userName, email, phoneNumber, body } = parseAppointmentForm(formData)

    const info = await transporter.sendMail({
        from: "contact@audifonosxmenos.com",
        to: "contact@audifonosxmenos.com",
        subject: "Cita: " + userName,
        text: "Correo electrónico: " + email + "\nNúmero de teléfono: " + phoneNumber + "\nConsideraciones: " + body,
    });

    Logger.endFunction(CONTEXT, "sendAppointmentEmail", info.messageId)
}

/**
 * Sends a receipt email with a PDF invoice and an audiometry file as attachments.
 *
 * @param formData - The FormData object containing user-submitted shopping and audiometry data.
 * @param orderId - The unique identifier for the order, used for generating the receipt and naming the attachments.
 *
 * @throws If the email cannot be sent or if the file reading fails.
 */
export async function sendReceiptEmail(orderId: string) {
    Logger.startFunction(CONTEXT, "sendReceiptEmail")

    const orderData = await getOrder(orderId)

    const receiptBase64Pdf = await createReceipt(orderId);
    const audiometryFile = orderData.audiometryFile

    const info = await transporter.sendMail({
        from: "contact@audifonosxmenos.com",
        to: orderData.email,
        cc: "contact@audifonosxmenos.com",
        subject: "Audifonos X menos - Pedido Nº " + orderId,
        text: "Gracias por tu compra. Adjuntamos tu recibo en PDF junto al archivo de audiometría.",
        attachments: [
            {
                filename: `recibo-${orderId}.pdf`,
                content: receiptBase64Pdf,
                encoding: 'base64',
                contentType: 'application/pdf',
            },
            {
                filename: audiometryFile.name,
                content: audiometryFile.buffer,
                contentType: audiometryFile.type,
            }
        ],
    });

    Logger.endFunction(CONTEXT, "sendReceiptEmail", info.messageId)
}