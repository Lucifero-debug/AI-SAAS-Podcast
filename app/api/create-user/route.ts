import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const user = await currentUser()

       if(!user){
        return;
       }


        // Create the user in Prisma
      const createdUser=  await prisma.user.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
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
