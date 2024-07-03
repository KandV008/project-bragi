import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';

export async function DELETE() {
  const { userId } = auth();

  if (userId == null){
    console.log("ERROR: There is no active user")
    return null;
  }

  try {
    await clerkClient.users.deleteUser(userId);
    return NextResponse.json({ message: 'User deleted' });
  }
  catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Error deleting user' });
  }
}