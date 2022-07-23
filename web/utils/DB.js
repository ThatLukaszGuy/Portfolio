import mongoose from 'mongoose';

const DB = async () => {
    mongoose
        .connect(process.env.MONGO)
        .then(() => console.log('Database Connected , access granted '))
        .catch((e) => console.log(`An error occurred: ${e}`))
}
export default DB;