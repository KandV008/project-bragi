import { endNameParam, startNameParam } from "@/app/model/JSONnames";
import { getNovelties } from "@/db/novelty";
import { NextResponse } from "next/server";

/**
 * Handles the GET request to fetch a list of novelties. The request includes pagination parameters
 * (startIndex and endIndex) which are used to fetch a subset of novelties. If no novelties are found,
 * it returns a 404 response. In case of an error, it returns a 500 Internal Server Error response.
 *
 * @param {Request} request The incoming HTTP request containing pagination parameters.
 * @returns {NextResponse} The HTTP response containing the list of novelties or an error message.
 */
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const startIndex = searchParams.get(startNameParam);
    const endIndex = searchParams.get(endNameParam);

    try {
        const novelties = await getNovelties(startIndex, endIndex);
    
        if (!novelties) {
          return NextResponse.json({ message: 'Novelties not found' }, { status: 404 });
        }
    
        return NextResponse.json(novelties);
      } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
      }
}