export default (db) => async (ctx) => {
  const campaignId = ctx.params.id

  if (!campaignId) {
    ctx.response.status = 400
    ctx.response.body = { message: 'Invalid campaign id' }

    return
  }

  await db.deleteOne({ _id: { $oid: campaignId } })

  ctx.response.body = { message: 'Campaign delete' }
}
