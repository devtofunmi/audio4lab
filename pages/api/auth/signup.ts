import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; // Added import
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password, name, dateOfBirth, language, musicInterests, userRole } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Prepare data for user creation
    const userData: any = {
      email,
      password: hashedPassword,
    };

    if (name) userData.name = name;
    if (dateOfBirth) userData.dateOfBirth = new Date(dateOfBirth); // Convert to Date object
    if (language) userData.language = language;
    if (musicInterests && Array.isArray(musicInterests)) userData.musicInterests = musicInterests;
    if (userRole) userData.userRole = userRole;

    // Create new user
    const user = await prisma.user.create({
      data: userData,
    });

    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET as string, // Ensure JWT_SECRET is set in your .env file
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    // Do not return the password in the response
    const { password: _, ...userWithoutPassword } = user;

    res.status(201).json({ message: 'User created successfully', user: userWithoutPassword, token });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}