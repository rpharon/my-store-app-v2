import mongoose from 'mongoose'

const connection = {}

async function dbConnect () {
    if(connection.isConnected) {
        return
    }

    const db = await mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    connection.isConnected = db.Connection[0]
    //console.log(connection.isConnected)
}

export default dbConnect