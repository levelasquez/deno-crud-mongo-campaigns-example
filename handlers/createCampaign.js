export default (db) => async (ctx) => {
  if (!ctx.request.hasBody) {
    ctx.response.status = 400
    ctx.response.body = { message: 'Invalid campaign data' }

    return
  }

  const {
    value: { name, code, method, start, end },
  } = await ctx.request.body()

  if (!name || !code || !method || !start || !end) {
    ctx.response.status = 422
    ctx.response.body = {
      message:
        'Incorrect campaign data. Name, code, method, start and end are required',
    }

    return
  }

  const { $oid: id } = await db.insertOne({ name, code, method, start, end })

  ctx.response.body = { message: 'Campaign created', id }
}
