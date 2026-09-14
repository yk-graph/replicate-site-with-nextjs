'use client'

import { useState, type SubmitEvent } from 'react'

import { saveSubscriber } from '@/actions/subscribe'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/toast'

export function Subscribe() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      toast.add({
        type: 'error',
        title: 'Subscription failed!',
        description: 'Access key is missing. Please contact the site administrator.',
      })
      return
    }

    setIsLoading(true)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        email,
      }),
    })
    const data = await res.json()

    if (data.success) {
      try {
        await saveSubscriber(email)
      } catch (error) {
        console.error('Failed to save subscriber:', error)
      }

      setIsLoading(false)

      toast.add({
        type: 'success',
        title: 'Subscription successful!',
        description: 'You have successfully subscribed to our newsletter.',
      })

      setEmail('')
    } else {
      setIsLoading(false)

      toast.add({
        type: 'error',
        title: 'Subscription failed!',
        description: 'There was an error subscribing to our newsletter. Please try again later.',
      })
    }
  }

  return (
    <section id="subscribe" className="laptop:px-6 border-t px-4 py-16 text-center">
      <h2 className="text-2xl font-bold">Get our newsletter</h2>
      <p className="text-muted-foreground mx-auto mt-2 max-w-md text-sm">
        Subscribe to get the latest photos and updates from creators everywhere.
      </p>

      <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="bg-muted focus-visible:ring-ring h-11 flex-1 rounded-full px-4 text-sm outline-none focus-visible:ring-2"
        />
        <Button type="submit" size="lg" disabled={isLoading}>
          {isLoading ? 'Sending…' : 'Subscribe'}
        </Button>
      </form>
    </section>
  )
}
