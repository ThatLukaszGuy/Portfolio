import { useRouter } from "next/router";
import Projects from '../../../models/projectModel'
import DB from '../../../utils/DB';

export default async function handler(req,res) {
    const { id } = req.query
    await DB()
    
    try {
        const Project = await Projects.findOne({ _id: id })
        return res.status(200).send(Project)
    }  catch (err) {
        return res.status(400).send(err)
    }
    

    
    
    res.send(id)
}