import { categoryNameParam, endNameParam, filtersNameParam, startNameParam } from '@/app/config/JSONnames';
import { getProductsByCategory } from '@/db/product';
import { NextResponse } from 'next/server';

/**
 * Handles the GET request to fetch products by category, applying pagination and filters.
 * It retrieves the category, pagination indices, and filters from the query parameters.
 * If products are found, they are returned as a JSON response.
 * If no products are found, a 404 response is returned.
 * In case of any error, a 500 Internal Server Error response is returned.
 *
 * @returns {NextResponse} The HTTP response containing the requested products or an error message.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get(categoryNameParam);
  const startIndex = searchParams.get(startNameParam);
  const endIndex = searchParams.get(endNameParam);
  const filters = searchParams.get(filtersNameParam);

  console.warn("FILTERS: ", filters) //TODO Fix bug associated with multiple filter per attribute

  try {
    const products = await getProductsByCategory(category, startIndex, endIndex, filters);

    if (!products) {
      return NextResponse.json({ message: 'Products not found' }, { status: 404 });
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}