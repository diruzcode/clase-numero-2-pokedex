import { createApp } from './app.js'
import { env } from '../config/env.js'
import { connectMongo } from '../config/db.js'
(async () => {

    await connectMongo()
    const app =  createApp();
    app.listen(process.env.PORT, () => 
       console.log("Ya estoy arriba", process.env.PORT)
    )
})();