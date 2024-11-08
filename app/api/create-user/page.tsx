import prisma from "@/lib/prisma";
import { clerkClient } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Parse the request payload
        const body = req.body;
        const clerkUserId = body.data.id // Clerk sends the userId as `data.id` in the payload

        // Retrieve user details from Clerk
        const clerkUser = await(await clerkClient()).users.getUser(clerkUserId);

        // Create user in your Prisma database
        await prisma.user.create({
            data: {
                clerkId: clerkUser.id,
                email: clerkUser.emailAddresses[0].emailAddress,
                name: clerkUser.username || 'No Name',
            },
        });

        res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Failed to create user' });
    }
}
