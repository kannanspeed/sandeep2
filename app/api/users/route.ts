import { NextRequest, NextResponse } from 'next/server'
import db from '@/data/db.json'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')
  
  if (name) {
    const user = db.users.find(user => user.name === name)
    return NextResponse.json(user ? [user] : [])
  }
  
  return NextResponse.json(db.users)
}


