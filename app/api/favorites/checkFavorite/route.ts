import { productIdNameParam, userIdNameParam } from "@/app/model/JSONnames";
import { checkFavorite } from "@/db/favorites";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get(productIdNameParam);
    const userId = searchParams.get(userIdNameParam);
  
    try {
      const isFav = await checkFavorite(userId, productId);
      console.log(isFav)
  
      return NextResponse.json(isFav);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
  }