"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const postSingleProduct = async (postData) => {
  try {
    /* const postData = await req.json(); */
    const result = await dbConnect(collectionNames.PRACTICE_DATA).insertOne(postData);
    revalidatePath("/products");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
