export default (db) => async (ctx) => {
  ctx.response.body = await db.find({})
}
