import { countShoppingList } from '@/db/shoppingList/shoppingList';
import { NextResponse } from 'next/server';

/**
 * Handles the GET request to fetch a quantity of products in the shopping list.
 * Returns the bargain data in JSON format if found, or an error message if not.
 *
 * @param {Request} request The incoming HTTP request.
 * @returns {NextResponse} The HTTP response with either the bargain data or an error message.
 */
export async function GET() {
  try {
    const count: number = await countShoppingList();

    return NextResponse.json(count);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
