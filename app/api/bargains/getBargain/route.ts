import { bargainCodeName } from '@/app/model/JSONnames';
import { getBargain } from '@/db/bargain';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get(bargainCodeName);

  try {
    const bargain = await getBargain(code);

    if (!bargain) {
      return NextResponse.json({ message: 'Bargain not found' }, { status: 404 });
    }

    return NextResponse.json(bargain);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}