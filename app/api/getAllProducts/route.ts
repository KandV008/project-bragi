import { getAllProducts } from '@/db/mongoData';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const startIndex = searchParams.get('start');
  const endIndex = searchParams.get('end');

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