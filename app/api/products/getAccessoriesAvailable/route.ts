import { getAccessoriesAvailable } from '@/db/product/product';
import { NextResponse } from 'next/server';

/**
 * Handles the GET request to fetch a list of accessories based on compatibility. 
 *
 * If no accessories are found, a 404 response is returned. 
 * If an error occurs, a 500 Internal Server Error response is returned.
 *
 * @returns {NextResponse} The HTTP response containing the products or an error message.
 */
export async function GET() {

  try {
    const accessories = await getAccessoriesAvailable();

    if (!accessories) {
      return NextResponse.json({ message: 'Accessories not found' }, { status: 404 });
    }

    return NextResponse.json(accessories);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}