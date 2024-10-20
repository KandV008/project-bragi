import { getProductsByCategory } from '@/db/mongoData';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const startIndex = searchParams.get('start');
  const endIndex = searchParams.get('end');
  const filters = searchParams.get('filters');

  try {
    const products = await getProductsByCategory(category, startIndex, endIndex, filters);

    if (!products) {
      return NextResponse.json({ message: 'Products not found' }, { status: 404 });
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}