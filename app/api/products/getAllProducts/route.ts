import { endNameParam, startNameParam } from '@/app/model/JSONnames';
import { getAllProducts } from '@/db/product';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const startIndex = searchParams.get(startNameParam);
  const endIndex = searchParams.get(endNameParam);

  try {
    const products = await getAllProducts(startIndex, endIndex);

    if (!products) {
      return NextResponse.json({ message: 'Products not found' }, { status: 404 });
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}