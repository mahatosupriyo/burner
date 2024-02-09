// pages/api/admin.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function adminHandler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session || session?.user?.email !== 'codewithapu@gmail.com') {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  // If the user is authenticated and has the correct email, allow access
  res.status(200).json({ message: 'Welcome to admin area' });
}
