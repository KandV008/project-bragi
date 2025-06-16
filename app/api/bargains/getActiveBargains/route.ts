import { endNameParam, startNameParam } from "@/app/config/JSONnames";
import { getActiveBargains } from "@/db/bargain/bargain";
import { NextResponse } from "next/server";

/**
 * Handles the GET request to fetch a list of active bargains based on the provided start and end indices.
 * Retrieves the bargains from the database and returns them in JSON format.
 * If no bargains are found, it returns a 404 response. If an error occurs during the process,
 * it returns a 500 Internal Server Error response.
 *
 * @param {Request} request The incoming HTTP request.
 * @returns {NextResponse} The HTTP response containing the active bargains data or an error message.
 */
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const startIndex = searchParams.get(startNameParam);
    const endIndex = searchParams.get(endNameParam);

    try {
        const bargains = await getActiveBargains(startIndex, endIndex);
    
        if (!bargains) {
          return NextResponse.json({ message: 'Bargains not found' }, { status: 404 });
        }
    
        return NextResponse.json(bargains);
      } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
      }
}