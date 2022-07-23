import Projects from '../../../models/projectModel'
import DB from '../../../utils/DB';

export default async function ProjectHandler (req,res) {
    const { method } = req
    await DB()
    switch (method) {
        case 'GET':
            try {
                const ProjectArray = await Projects.find({}).select('-otherImages -description.reason -description.difficulties')
                return res.status(200).send(ProjectArray)
            } catch (err) {
                return res.status(400).send(err)
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}