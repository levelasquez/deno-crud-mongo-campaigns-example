export default (db) => async (ctx) => {
  const campaignId = ctx.params.id

  if (!campaignId) {
    ctx.response.status = 400
    ctx.response.body = { message: 'Invalid campaign id' }

    return
  }

  if (!ctx.request.hasBody) {
    ctx.response.status = 400
    ctx.response.body = { message: 'Invalid campaign data' }

    return
  }

  const { value: body } = await ctx.request.body()

  await db.updateOne({ _id: { $oid: campaignId } }, body)

  ctx.response.body = { message: 'Campaign updated' }
}
