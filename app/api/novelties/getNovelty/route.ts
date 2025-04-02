import { noveltyIdName } from '@/app/config/JSONnames';
import { getNovelty } from '@/db/novelty';
import { NextResponse } from 'next/server';

/**
 * Handles the GET request to fetch a single novelty by its ID. The request includes a novelty ID as a query
 * parameter. If the novelty is not found, it returns a 404 response. In case of an error, it returns a 500 
 * Internal Server Error response.
 *
 * @param {Request} request The incoming HTTP request containing the novelty ID.
 * @returns {NextResponse} The HTTP response containing the novelty or an error message.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get(noveltyIdName);

  try {
    const novelty = await getNovelty(id);

    if (!novelty) {
      return NextResponse.json({ message: 'Novelty not found' }, { status: 404 });
    }

    return NextResponse.json(novelty);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
