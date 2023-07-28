import Techs from '../../../models/techModel';
import DB from '../../../utils/DB';
import { NextResponse } from "next/server";

export async function GET() {
    await DB()
    const techs = await Techs.find({})
    return NextResponse.json({techs})
}