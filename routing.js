import { Router } from './deps.js'
import createCampaign from './handlers/createCampaign.js'
import getCampaigns from './handlers/getCampaigns.js'
import getCampaignDetails from './handlers/getCampaignDetails.js'
import updateCampaign from './handlers/updateCampaign.js'
import deleteCampaign from './handlers/deleteCampaign.js'

export default (db) => {
  const router = new Router()

  router
    .post('/campaigns', createCampaign(db))
    .get('/campaigns', getCampaigns(db))
    .get('/campaigns/:id', getCampaignDetails(db))
    .put('/campaigns/:id', updateCampaign(db))
    .delete('/campaigns/:id', deleteCampaign(db))

  return router
}
