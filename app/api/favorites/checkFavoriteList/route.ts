import { productIdsNameParam, userIdNameParam } from "@/app/model/JSONnames";
import { checkFavoriteList } from "@/db/favorites";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const productIds = searchParams.get(productIdsNameParam)?.split(','); 
    const userId = searchParams.get(userIdNameParam);
  
    try {
      const isFav = await checkFavoriteList(userId, productIds);
      console.log(isFav)
  
      return NextResponse.json(isFav);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
  }