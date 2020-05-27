export default (db) => async (ctx) => {
  const campaignId = ctx.params.id
  console.log({campaignId})

  if (!campaignId) {
    ctx.response.status = 400
    ctx.response.body = { msg: 'Invalid user id' }

    return
  }

  const foundCampaign = await db.findOne({ _id: { $oid: campaignId } })

  if (!foundCampaign) {
    ctx.response.status = 404
    ctx.response.body = { message: `Campaign with ID ${campaignId} not found` }

    return
  }

  ctx.response.body = foundCampaign
}
