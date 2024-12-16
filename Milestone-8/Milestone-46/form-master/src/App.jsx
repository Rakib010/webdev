import SimpleForm from "./components/Form/SimpleForm";
import StateFulForm from "./components/Form/StateFulForm";
import HookForm from "./components/HookForm/HookForm";
import Grandpa from "./components/Parent/Grandpa";
import RefFrom from "./components/ReForm/RefFrom";
import ReusableForm from "./components/Reusable/ReusableForm";

const App = () => {
  const handleSingUpSubmit = (data) => {
    console.log("sing up", data);
  };
  const handleUpdateProfile = (data) => {
    console.log("profile", data);
  };

  return (
    <div>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/*   <RefFrom></RefFrom> */}
      {/* <HookForm></HookForm> */}

      <Grandpa></Grandpa>

      {/*     <ReusableForm handleSubmit={handleSingUpSubmit} formTitle="Sing Up">
        children props  
        <div>
          <h2>Sing Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        submitBtnText="update"
        handleSubmit={handleUpdateProfile}
      ></ReusableForm> */}
    </div>
  );
};

export default App;
