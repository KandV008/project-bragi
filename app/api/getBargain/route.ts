import { getBargain } from '@/db/postgresData';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

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
