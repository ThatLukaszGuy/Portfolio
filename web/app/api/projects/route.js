import Projects from '../../../models/projectModel'
import DB from '../../../utils/DB';
import { NextResponse } from "next/server";

export async function GET() {
    await DB()
    const projects = await Projects.find({}).select('-otherImages -description.reason -description.difficulties')
    return NextResponse.json({projects})
}