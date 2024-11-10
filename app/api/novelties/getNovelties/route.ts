import { endNameParam, startNameParam } from "@/app/model/JSONnames";
import { getNovelties } from "@/db/novelty";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const startIndex = searchParams.get(startNameParam);
    const endIndex = searchParams.get(endNameParam);
    console.log(startIndex, endIndex)

    try {
        const novelties = await getNovelties(startIndex, endIndex);
    
        if (!novelties) {
          return NextResponse.json({ message: 'Novelties not found' }, { status: 404 });
        }
    
        return NextResponse.json(novelties);
      } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
      }
}