import { endNameParam, startNameParam } from '@/app/config/JSONnames';
import { getAllProducts } from '@/db/product/product';
import { NextResponse } from 'next/server';

/**
 * Handles the GET request to fetch a list of products based on provided start and end indices. 
 * The request includes query parameters to specify the range of products to fetch.
 * If no products are found, a 404 response is returned. 
 * If an error occurs, a 500 Internal Server Error response is returned.
 *
 * @param {Request} request The incoming HTTP request containing the start and end indices for the products.
 * @returns {NextResponse} The HTTP response containing the products or an error message.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const startIndex = searchParams.get(startNameParam);
  const endIndex = searchParams.get(endNameParam);

  try {
    const products = await getAllProducts(startIndex, endIndex);

    if (!products) {
      return NextResponse.json({ message: 'Products not found' }, { status: 404 });
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}