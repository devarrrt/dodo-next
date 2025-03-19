import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  // const users = await prisma.user.findMany()

  return NextResponse.json({
    //здесь вместо липовых данных отправлять users, когда настроишь призму
    users: [{
      "id": 1,
      fullName: 'Test',
      email: 'motherlode@gmail.com',
      password: 'motherlode',
      cteatedAt: '2024-11-30T13:07:11.263Z',
      updated: '2024-11-30T13:07:11.263Z'
    }]
  })
}

export async function POST(req: NextRequest) {
  const data = await req.json()

  const user = await prisma.user.create({
    data
  })

  return NextResponse.json(user)
}