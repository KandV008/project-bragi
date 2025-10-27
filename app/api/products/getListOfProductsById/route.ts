import { productIdName, productIdsName } from '@/app/config/JSONnames';
import { getProduct, getProductsByIds } from '@/db/product/product';
import { NextResponse } from 'next/server';

/**
 * Handles the GET request to fetch a list of product by its IDs from the database.
 * If the products are found, it is returned in the response as JSON. 
 * If no product is found, a 404 response is returned. 
 * In case of an error during the operation, a 500 Internal Server Error is returned.
 *
 * @returns {NextResponse} The HTTP response containing the requested product or an error message.
 */
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const idsParam = searchParams.get(productIdsName);

    if (!idsParam) {
        return NextResponse.json({ message: 'No IDs provided' }, { status: 400 });
    }

    const ids = idsParam.split(',').map(id => id.trim()).filter(Boolean); 


    if (!ids) {
        return NextResponse.json({ message: 'No IDs provided' }, { status: 400 });
    }

    try {
        const products = await getProductsByIds(ids);

        if (!products) {
            return NextResponse.json({ message: 'Products not found' }, { status: 404 });
        }

        return NextResponse.json(products);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
