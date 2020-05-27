const env = Deno.env.toObject()

export const APP_HOST = env.APP_HOST || 'localhost'
export const APP_PORT = env.APP_PORT || 3000
export const DB_NAME = env.DB_NAME || 'deno'
export const DB_URI = env.DB_URI || 'mongodb://localhost:27017'
