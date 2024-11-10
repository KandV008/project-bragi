import { categoryNameParam, endNameParam, filtersNameParam, startNameParam } from '@/app/model/JSONnames';
import { getProductsByCategory } from '@/db/product';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get(categoryNameParam);
  const startIndex = searchParams.get(startNameParam);
  const endIndex = searchParams.get(endNameParam);
  const filters = searchParams.get(filtersNameParam);

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