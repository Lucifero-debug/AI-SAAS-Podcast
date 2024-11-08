import { NextRequest, NextResponse } from 'next/server'; // Notice the import from 'next/server'
import prisma from '@/lib/prisma'; // import your Prisma client
import { clerkClient } from '@clerk/nextjs/server';



const createUserInPrisma = async (clerkUserId: string) => {
  const clerkUser = await(await clerkClient()).users.getUser(clerkUserId);

  const user = await prisma.user.create({
    data: {
      clerkId: clerkUser.id,
      email: clerkUser.emailAddresses[0].emailAddress,
      name: clerkUser.username || 'No Name',
    },
  });
  return user;
};

// Use NextRequest instead of NextApiRequest for app directory
export async function POST(req: NextRequest) {
  try {
    // Read JSON body from request
    const body = await req.json();
    

    const { userId } = body; // Clerk webhook sends userId in the payload

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Create user in Prisma
    const user = await createUserInPrisma(userId);

    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Error creating user in Prisma' }, { status: 500 });
  }
}
