import { getNovelty } from '@/db/novelty';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    const novelty = await getNovelty(id);

    if (!novelty) {
      return NextResponse.json({ message: 'Novelty not found' }, { status: 404 });
    }

    return NextResponse.json(novelty);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
