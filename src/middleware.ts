import { defineMiddleware, sequence } from 'astro:middleware'

const auth = defineMiddleware((context, next) => {
  return next()
})

export const onRequest = sequence(auth)
