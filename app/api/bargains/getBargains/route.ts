import { getBargains } from "@/db/bargain";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const startIndex = searchParams.get('start');
    const endIndex = searchParams.get('end');
    console.log(startIndex, endIndex)

    try {
        const products = await getBargains(startIndex, endIndex);
    
        if (!products) {
          return NextResponse.json({ message: 'Bargains not found' }, { status: 404 });
        }
    
        return NextResponse.json(products);
      } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
      }
}