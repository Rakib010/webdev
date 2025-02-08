import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET(req, params) {
  const data = await dbConnect(collectionNames.PRACTICE_DATA)
    .find({})
    .toArray();

  return Response.json(data);
}

export async function POST(req) {}
