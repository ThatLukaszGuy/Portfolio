import Projects from '../../../../models/projectModel'
import DB from '../../../../utils/DB';
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const {id} =params
    await DB()
    const project = await Projects.findOne({_id: id})
    return NextResponse.json({project})
}