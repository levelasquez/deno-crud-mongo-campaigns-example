export default async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.response.status = error.status || 500
    ctx.response.body = { message: error.message }
  }
}
