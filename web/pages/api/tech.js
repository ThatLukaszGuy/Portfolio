import Techs from '../../models/techModel';
import DB from '../../utils/DB';

export default async function techHandler (req,res) {
    const { method } = req
    await DB()
    switch (method) {
        case 'GET':
            try {
                const techArray = await Techs.find({})
                res.status(200).send(techArray)
            } catch (err) {
                res.status(400).send(err)
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}