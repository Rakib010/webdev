import { getServerSession } from "next-auth";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import { authOptions } from "@/lib/authOptions";
import LogoutButton from "./components/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);
  //console.log(session);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Hello World</h1>
      {/* login & logout */}
      {session?.user ? <LogoutButton /> : <LoginButton />}

       {/* login userInfo  */}
      <UserInfo />

      {/* Server-side Session Display */}
      <div className="mt-4 p-4 rounded-md border">
        <h2 className="text-lg font-medium">Server Component</h2>
        {/* <p>
          <span className="font-semibold">Name:</span>{" "}
          {session?.user?.username || "Guest"}
        </p> */}
        {JSON.stringify(session)}
      </div>
    </div>
  );
}
