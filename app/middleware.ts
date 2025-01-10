import { NextResponse, NextRequest } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = { matcher: "/" };

export async function middleware(request: NextRequest) {
  // Await the asynchronous `get` call
  const isMaintenance = await get<boolean>('maintenance');

  if (isMaintenance) {
    return NextResponse.redirect('/maintenance');
  }

  return NextResponse.next();
}
