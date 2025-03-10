import { brandName, priceName, productIdName } from '@/app/model/JSONnames';
import { getRelatedProducts } from '@/db/product';
import { NextResponse } from 'next/server';

/**
 * Handles the GET request to fetch related products based on the given product ID, brand, and price range.
 * Retrieves the search parameters (product ID, brand, and price) from the URL query string.
 * If related products are found, they are returned as a JSON response.
 * If no related products are found, a 404 response is returned.
 * If an error occurs, a 500 Internal Server Error response is returned.
 *
 * @returns {NextResponse} The HTTP response containing the related products or an error message.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const brand = searchParams.get(brandName);
  const price = searchParams.get(priceName);
  const id = searchParams.get(productIdName);

  try {
    const product = await getRelatedProducts(id, brand, price);

    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}