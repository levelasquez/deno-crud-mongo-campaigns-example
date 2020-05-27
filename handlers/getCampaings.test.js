import { test, assertEquals } from '../test_deps.js'
import getCampaigns from './getCampaigns.js'

test('Should return all campaigns', async () => {
  const response = [
    {
      _id: {
        $oid: '5ecdb0b500cda19500b4180e',
      },
      name: 'mena',
      code: 'deco',
      method: 'thodme',
      start: 'date',
      end: 'teda',
    },
  ]
  const ctx = { response: { body: [{}] } }
  const db = { find: () => response }

  await getCampaigns(db)(ctx)

  assertEquals(ctx.response.body, response)
})
