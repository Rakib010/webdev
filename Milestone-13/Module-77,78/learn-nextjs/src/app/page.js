import { getServerSession } from "next-auth";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>Hello World</h1>
      <LoginButton />
      <p className="text-bold">Form client component</p>
      <UserInfo />
      {JSON.stringify(session)}
    </div>
  );
}
