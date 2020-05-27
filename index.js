import { Application } from './deps.js'
import { APP_HOST, APP_PORT, DB_URI, DB_NAME } from './config.js'
import setupRouter from './routing.js'
import errors from './middlewares/errors.js'
import mongo from './services/mongo.js'

const db = mongo(DB_URI, DB_NAME)
const app = new Application()
const router = setupRouter(db)

app.use(errors)
app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on http://${APP_HOST}:${APP_PORT}`)

await app.listen(`${APP_HOST}:${APP_PORT}`)
