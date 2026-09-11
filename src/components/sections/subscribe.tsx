'use client'

import { useState, type FormEvent } from 'react'

import { Button } from '@/components/ui/button'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Subscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')

    try {
      await new Promise((resolve) => setTimeout(resolve, 600))
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
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
        <Button type="submit" size="lg" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Subscribe'}
        </Button>
      </form>

      {status === 'success' && <p className="mt-3 text-sm text-green-600">登録ありがとうございます！</p>}
      {status === 'error' && (
        <p className="text-destructive mt-3 text-sm">送信に失敗しました。時間をおいてお試しください。</p>
      )}
    </section>
  )
}
