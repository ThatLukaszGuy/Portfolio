import DB from "../../../utils/DB";

export default async function connection(req,res) {
    try {

        await DB()
        res.send('test route for db connection')
    } catch (error) {
        res.send(error)
    }
}