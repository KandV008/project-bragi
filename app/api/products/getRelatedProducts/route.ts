import { brandName, priceName, productIdName } from '@/app/model/JSONnames';
import { getRelatedProducts } from '@/db/product';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const brand = searchParams.get(brandName);
  const price = searchParams.get(priceName);
  const id = searchParams.get(productIdName);

  try {
    const product = await getRelatedProducts(id, brand, price);

    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}