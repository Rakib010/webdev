import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET(req, params) {
  const data = await dbConnect("practice_data").find({}).toArray();

  return Response.json(data);
}

export async function POST(req) {
  
}
