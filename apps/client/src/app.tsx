import { useEffect, useState } from "react"
import { api } from "./lib/api"

const CurrentDate = () => {
  const [date, setDate] = useState<Date>()
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    (async () => {
      setError(undefined)
      setLoading(true)

      try {
        const res = await api.date.$get()
        if (res.ok) {
          throw Error('Failed to fetch timestamp')
        }

        const { timestamp } = await res.json()
        setDate(new Date(timestamp))
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message)
        } else {
          setError('Unknown error')
        }
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error || !date) return <p>{error ?? 'Unknown error'}</p>

  return <p>Date is {date.toISOString()}</p>
}

export const App = () => {
  return (
    <CurrentDate />
  )
}
