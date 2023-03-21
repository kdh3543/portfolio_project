export const CONFIG = {
  ENV: process.env.NODE_ENV,
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  API_IMAGE: process.env.NEXT_PUBLIC_API_IMAGE,
} as const;
