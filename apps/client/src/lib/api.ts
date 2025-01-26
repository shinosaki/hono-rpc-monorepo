import { client } from "@apps/server";

export const api = client(import.meta.env.VITE_API_HOST)
