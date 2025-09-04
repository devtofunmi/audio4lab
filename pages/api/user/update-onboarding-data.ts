import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { userId, musicInterests, userRole, plan } = req.body;

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        musicInterests: musicInterests || [],
        userRole: userRole || null,
        plan: plan || null, // Assuming 'plan' is a field in your User model
      },
    });

    res.status(200).json({ message: 'User onboarding data updated successfully', user });
  } catch (error) {
    console.error('Error updating onboarding data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}