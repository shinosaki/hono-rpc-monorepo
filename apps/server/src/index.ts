import { Hono } from 'hono'
import { dateRoute } from './routes'
import { hc } from 'hono/client'

const app = new Hono()

const routes = app
  .route('/date', dateRoute)

export type AppType = typeof routes
export default app

type Client = typeof hc<AppType>
export const client = (
  ...a: Parameters<Client>
): ReturnType<Client> => hc<AppType>(...a)
