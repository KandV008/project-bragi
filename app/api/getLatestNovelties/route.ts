import { getLatestNovelties } from '@/app/lib/mongoData';
import { NextResponse } from 'next/server';

export async function GET() {

  try {
    const product = await getLatestNovelties();
    console.log(product)

    if (!product) {
      return NextResponse.json({ message: 'Products not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}