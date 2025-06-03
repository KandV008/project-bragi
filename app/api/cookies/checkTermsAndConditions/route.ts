import { checkCookiesStatus, checkTermsAndConditions } from "@/lib/cookies";
import { NextResponse } from "next/server";

/**
 * Handles the GET request to check if the user has accepted the terms and conditions.
 * Returns a JSON response with the result.
 * If an error occurs, it returns a 500 Internal Server Error response.
 *
 * @returns {NextResponse} The HTTP response containing the result of the check or an error message.
 */
export async function GET() {
    try {
      const showPopUp = await checkTermsAndConditions();
  
      return NextResponse.json(showPopUp);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
  }