export class UnsplashError extends Error {
  status: number
  errors: string[]

  constructor(status: number, errors: string[]) {
    super(errors.join(', ') || `Unsplash API error (status ${status})`)
    this.name = 'UnsplashError'
    this.status = status
    this.errors = errors
  }
}
