import { endNameParam, filtersNameParam, keywordNameParam, startNameParam } from '@/app/model/JSONnames';
import { searchProducts } from '@/db/product';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get(keywordNameParam);
  const startIndex = searchParams.get(startNameParam);
  const endIndex = searchParams.get(endNameParam);
  const filters = searchParams.get(filtersNameParam);

  try {
    const product = await searchProducts(keyword, startIndex, endIndex, filters);

    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}