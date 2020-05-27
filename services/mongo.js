import { MongoClient } from '../deps.js'

export default (uri, dbName) => {
  const client = new MongoClient()

  client.connectWithUri(uri)

  const db = client.database(dbName)
  const campaigns = db.collection('campaigns')

  return campaigns
}
