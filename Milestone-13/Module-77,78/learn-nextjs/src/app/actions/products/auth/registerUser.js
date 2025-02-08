"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  try {
    // need to check if unique username was given
    const result = await dbConnect(collectionNames.TEST_USER).insertOne(
      payload
    );
   // console.log(result);
    const simpleResult = {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(), // Convert ObjectId to string
    };
    return simpleResult;
  } catch (error) {
    console.log(error);
    return null;
  }
};
