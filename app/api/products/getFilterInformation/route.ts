import { categoryNameParam, filtersNameParam } from '@/app/model/JSONnames';
import { getFilterInformation } from '@/db/product';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get(categoryNameParam);
  const elementsToFilter = searchParams.get(filtersNameParam)

  try {
    const result = await getFilterInformation(category, elementsToFilter);

    if (!result) {
      return NextResponse.json({ message: 'Filters not found' }, { status: 404 });
    }

    console.warn("RESULT: ", result)
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}