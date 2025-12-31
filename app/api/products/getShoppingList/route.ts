export const dynamic = "force-dynamic";

import { getShoppingList } from '@/db/shoppingList/shoppingList';
import { NextResponse } from 'next/server';

/**
 * Handles the GET request to fetch the shopping list of the current user. 
 * If no shopping list is found, a 404 response is returned. 
 * If an error occurs, a 500 Internal Server Error response is returned.
 *
 * @returns {NextResponse} The HTTP response containing the shopping list or an error message.
 */
export async function GET() {
    try {
        const shoppingList = await getShoppingList();

        if (!shoppingList) {
            return NextResponse.json({ message: 'Shopping List not found' }, { status: 404 });
        }

        return NextResponse.json(shoppingList);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}