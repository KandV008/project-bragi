import { productIdsNameParam, userIdNameParam } from "@/app/config/JSONnames";
import { checkFavoriteList } from "@/db/favorites";
import { NextResponse } from "next/server";

/**
 * Handles the GET request to check if a list of products is marked as favorites by a user.
 * The product IDs and user ID are retrieved from the query parameters, and it checks if each
 * of the products is in the user's favorites list. Returns a JSON response with the result.
 * If an error occurs, it returns a 500 Internal Server Error response.
 *
 * @param {Request} request The incoming HTTP request containing query parameters for product IDs and user ID.
 * @returns {NextResponse} The HTTP response containing the result of the favorite check or an error message.
 */
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const productIds = searchParams.get(productIdsNameParam)?.split(','); 
    const userId = searchParams.get(userIdNameParam);
  
    try {
      const isFav = await checkFavoriteList(userId, productIds);
  
      return NextResponse.json(isFav);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
  }