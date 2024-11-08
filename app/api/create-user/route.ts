import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try {

   const brown=await req.json()
   console.log("dementia",brown.data.email_addresses)
const user=brown.data
    

      const createdUser=  await prisma.user.create({
            data: {
                clerkId: user.id,
                email: user.email_addresses[0].email_address,
                name: user.username || 'No Name',
            },
        });
        console.log("user created",createdUser)

        return NextResponse.json({ message: 'User created successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ message: 'Failed to create user' }, { status: 500 });
    }
}  

