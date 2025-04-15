import { productIdNameParam, userIdNameParam } from "@/app/config/JSONnames";
import { checkFavorite } from "@/db/favorites/favorites";
import { NextResponse } from "next/server";

/**
 * Handles the GET request to check if a given product is marked as a favorite by a user.
 * It retrieves the product ID and user ID from the query parameters and checks if the product
 * is in the user's favorites list. Returns a JSON response with the result.
 * If an error occurs, it returns a 500 Internal Server Error response.
 *
 * @param {Request} request The incoming HTTP request containing query parameters for product ID and user ID.
 * @returns {NextResponse} The HTTP response containing the result of the favorite check or an error message.
 */
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get(productIdNameParam);
    const userId = searchParams.get(userIdNameParam);
  
    try {
      const isFav = await checkFavorite(userId, productId);
  
      return NextResponse.json(isFav);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
  }