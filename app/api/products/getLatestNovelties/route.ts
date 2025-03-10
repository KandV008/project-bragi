import { getLatestNovelties } from '@/db/product';
import { NextResponse } from 'next/server';

/**
 * Handles the GET request to fetch the latest novelties from the database.
 * If novelties are found, they are returned in the response as JSON. 
 * If no novelties are found, a 404 response is returned. 
 * In case of an error during the operation, a 500 Internal Server Error is returned.
 *
 * @returns {NextResponse} The HTTP response containing the latest novelties or an error message.
 */
export async function GET() {
  try {
    const product = await getLatestNovelties();

    if (!product) {
      return NextResponse.json({ message: 'Products not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}