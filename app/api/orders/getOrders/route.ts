import { endNameParam, startNameParam } from "@/app/config/JSONnames";
import { getBargains } from "@/db/bargain";
import { getOrders } from "@/db/order";
import { NextResponse } from "next/server";

/**
 * Handles the GET request to fetch a list of orders based on the provided start and end indices.
 * Retrieves the bargains from the database and returns them in JSON format.
 * If no bargains are found, it returns a 404 response. If an error occurs during the process,
 * it returns a 500 Internal Server Error response.
 *
 * @param {Request} request The incoming HTTP request.
 * @returns {NextResponse} The HTTP response containing the bargains data or an error message.
 */
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const startIndex = searchParams.get(startNameParam);
    const endIndex = searchParams.get(endNameParam);

    try {
        const orders = await getOrders(startIndex, endIndex);
    
        if (!orders) {
          return NextResponse.json({ message: 'Orders not found' }, { status: 404 });
        }
    
        return NextResponse.json(orders);
      } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
      }
}