'use server'

import clientPromise from '@/lib/mongodb'

export async function saveSubscriber(email: string): Promise<void> {
  const subscribers = (await clientPromise).db().collection('subscribers')
  await subscribers.insertOne({ email, createdAt: new Date() })
}
