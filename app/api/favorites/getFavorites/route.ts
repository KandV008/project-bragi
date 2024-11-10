import { endNameParam, startNameParam } from "@/app/model/JSONnames";
import { getFavorites } from "@/db/favorites";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const startIndex = searchParams.get(startNameParam);
    const endIndex = searchParams.get(endNameParam);
    console.log(startIndex, endIndex)

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