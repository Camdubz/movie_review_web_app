import app from './server.js'
import mongoddb from 'mongodb'
import dotenv from 'dotenv'

async function main() {
    dotenv.config()

    const client = new MongoDBCollectionNamespace.MongoClient(
        process.env.MOVIEREVIEWS_DB_URI
    )

    const port = process.env.PORT || 8800

    try {
        // Connect to the mongodb cluster 
        await client.connect()
        app.listen(port, () => {
            console.log('server is running on port:' + port)
        })
    } catch (e) {
        console.error(e);
        process.exit(1)
    }

}

main().catch(console.error);