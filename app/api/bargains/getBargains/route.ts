import { endNameParam, startNameParam } from "@/app/model/JSONnames";
import { getBargains } from "@/db/bargain";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const startIndex = searchParams.get(startNameParam);
    const endIndex = searchParams.get(endNameParam);
    console.log(startIndex, endIndex)

    try {
        const bargains = await getBargains(startIndex, endIndex);
    
        if (!bargains) {
          return NextResponse.json({ message: 'Bargains not found' }, { status: 404 });
        }
    
        return NextResponse.json(bargains);
      } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
      }
}