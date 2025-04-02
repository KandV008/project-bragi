import { bargainIdName } from '@/app/config/JSONnames';
import { getBargain } from '@/db/bargain';
import { NextResponse } from 'next/server';

/**
 * Handles the GET request to fetch a specific bargain based on its ID.
 * It retrieves the bargain using the provided `id` in the request's search parameters.
 * Returns the bargain data in JSON format if found, or an error message if not.
 *
 * @param {Request} request The incoming HTTP request.
 * @returns {NextResponse} The HTTP response with either the bargain data or an error message.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get(bargainIdName);

  try {
    const bargain = await getBargain(id);

    if (!bargain) {
      return NextResponse.json({ message: 'Bargain not found' }, { status: 404 });
    }

    return NextResponse.json(bargain);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
