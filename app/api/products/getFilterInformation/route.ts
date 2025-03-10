import { categoryNameParam, filtersNameParam } from '@/app/model/JSONnames';
import { getFilterInformation } from '@/db/product';
import { NextResponse } from 'next/server';

/**
 * Handles the GET request to fetch filter information for a specific category and its associated filters.
 * The request includes query parameters for the category and the elements to filter.
 * If no filter information is found, a 404 response is returned. 
 * If an error occurs, a 500 Internal Server Error response is returned.
 *
 * @param {Request} request The incoming HTTP request containing the category and filters to apply.
 * @returns {NextResponse} The HTTP response containing the filter information or an error message.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get(categoryNameParam);
  const elementsToFilter = searchParams.get(filtersNameParam)

  try {
    const result = await getFilterInformation(category, elementsToFilter);

    if (!result) {
      return NextResponse.json({ message: 'Filters not found' }, { status: 404 });
    }

    console.warn("RESULT: ", result)
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}