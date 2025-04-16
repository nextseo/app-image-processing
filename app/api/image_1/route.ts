import { db } from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req :Request) {
  try {
    const {type} = await req.json()
    let sql = ""
    if(type === "1") sql ="SELECT * FROM face"
    if(type === "2") sql ="SELECT * FROM helmet"

    const [rows] = await db.query(sql);
    return NextResponse.json(rows);
  } catch (error) {
    console.error('DB Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}