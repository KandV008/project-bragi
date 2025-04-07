import { endNameParam, startNameParam } from "@/app/config/JSONnames";
import { getFavorites } from "@/db/favorites/favorites";
import { NextResponse } from "next/server";

/**
 * Handles the GET request to fetch a list of favorite products for a user. The request includes
 * pagination parameters (startIndex and endIndex) which are used to fetch a subset of favorite products.
 * Returns the list of favorite products in JSON format. If no products are found, returns a 404 response.
 * In case of an error, returns a 500 Internal Server Error response.
 *
 * @param {Request} request The incoming HTTP request containing pagination parameters.
 * @returns {NextResponse} The HTTP response containing the list of favorite products or an error message.
 */
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const startIndex = searchParams.get(startNameParam);
    const endIndex = searchParams.get(endNameParam);

    try {
        const products = await getFavorites(startIndex, endIndex);
    
        if (!products) {
          return NextResponse.json({ message: 'Products not found' }, { status: 404 });
        }
    
        return NextResponse.json(products);
      } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
      }
}