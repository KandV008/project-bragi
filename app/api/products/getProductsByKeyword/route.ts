import { endNameParam, filtersNameParam, keywordNameParam, startNameParam } from '@/app/model/JSONnames';
import { searchProducts } from '@/db/product';
import { NextResponse } from 'next/server';

/**
 * Handles the GET request to search for products using a keyword, pagination, and filters.
 * Retrieves the search parameters (keyword, pagination, and filters) from the URL query string.
 * If products are found based on the search, they are returned as a JSON response.
 * If no products are found, a 404 response is returned.
 * If an error occurs, a 500 Internal Server Error response is returned.
 *
 * @returns {NextResponse} The HTTP response containing the search results or an error message.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get(keywordNameParam);
  const startIndex = searchParams.get(startNameParam);
  const endIndex = searchParams.get(endNameParam);
  const filters = searchParams.get(filtersNameParam);

  try {
    const product = await searchProducts(keyword, startIndex, endIndex, filters);

    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}