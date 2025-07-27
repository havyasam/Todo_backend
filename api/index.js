const express = require("express")
const cors = require('cors')
const app = express()
const router = require('../routes/route')
const connectDb = require('../connect/connect')
require('dotenv').config()
const PORT = process.env.PORT

app.use(cors())
app.use('/api/tasks/', router)



const start = async()=>{
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(PORT,
            console.log(`listening at port 5000`)
        )
 
    } catch (error) {
        console.log("db is not connected")
        
    }

}
start()