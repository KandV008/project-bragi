import { searchProducts } from '@/db/mongoData';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('keyword');
  const startIndex = searchParams.get('start');
  const endIndex = searchParams.get('end');
  const filters = searchParams.get('filters');

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