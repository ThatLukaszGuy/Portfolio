const mongoose = require('mongoose')

const startDB = () => {
    // db connection
    const connectionURI = process.env.MONGO
    mongoose
        .connect(connectionURI)
        .then(() => console.log('Database Connected , access granted '))
        .catch((e) => console.log(`An error occurred: ${e}`))

}


module.exports = startDB