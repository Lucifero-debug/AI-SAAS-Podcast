import { NextApiRequest, NextApiResponse } from 'next';
import  prisma  from '@/lib/prisma'; // import your Prisma client
import {  clerkClient } from '@clerk/nextjs/server'




const createUserInPrisma = async (clerkUserId: string) => {
  // Fetch user data from Clerk using the Clerk SDK
  const clerkUser = await(await clerkClient()).users.getUser(clerkUserId);

  // Create user in Prisma
  const user = await prisma.user.create({
    data: {
      clerkId: clerkUser.id,
      email: clerkUser.emailAddresses[0]. emailAddress,
      name:clerkUser.username!
    },
  });
  return user;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { clerkUserId } = req.body;

      // Create user in Prisma
      const user = await createUserInPrisma(clerkUserId);
      console.log("user created",user)

      res.status(200).json({ user });
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: 'Error creating user in Prisma', });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
