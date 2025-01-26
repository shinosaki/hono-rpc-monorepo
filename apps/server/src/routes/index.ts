import { Hono } from 'hono'

export const dateRoute = new Hono()
  .get('/',
    (c) => {
      return c.json({ timestamp: Date.now() })
    }
  )
