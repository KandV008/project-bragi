import { productIdName } from '@/app/config/JSONnames';
import { getOrder } from '@/db/order/order';
import { NextResponse } from 'next/server';

/**
 * Handles the GET request to fetch an order by its ID from the database.
 * If the order is found, it is returned in the response as JSON. 
 * If no order is found, a 404 response is returned. 
 * In case of an error during the operation, a 500 Internal Server Error is returned.
 *
 * @returns {NextResponse} The HTTP response containing the requested product or an error message.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get(productIdName);

  try {
    const order = await getOrder(id);

    if (!order) {
      return NextResponse.json({ message: 'Order not found' }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
