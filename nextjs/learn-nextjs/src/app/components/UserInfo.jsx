"use client";

import { useSession } from "next-auth/react";

export default function UserInfo() {
  //const { data: session } = useSession();
  const session = useSession();
  //console.log(session);

  return <div>{JSON.stringify(session)}</div>;
}

{
  /* <div className="flex justify-center items-center text-white ">
<div className="w-full max-w-sm p-6  rounded-2xl shadow-lg border border-gray-200">
  <h2 className="text-xl font-semibold mb-4">
    User Info From client component
  </h2>
  {session ? (
    <div className="space-y-2">
      <p>
        <span className="font-medium">Name:</span>{" "}
        {session?.user?.username}
      </p>
      {/* <p>
        <span className="font-medium">Email:</span> {session?.status}
      </p>  
      <p className="text-sm">
        <span className="font-medium">Session Expires:</span>{" "}
        {new Date(session.expires).toLocaleString()}
      </p>
    </div>
  ) : (
    <p>Not signed in</p>
  )}
</div>
</div> */
}
