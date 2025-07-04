import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-3  border-b-2 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
      <img src={profile}></img>
    </div>
  );
};

export default Header;
