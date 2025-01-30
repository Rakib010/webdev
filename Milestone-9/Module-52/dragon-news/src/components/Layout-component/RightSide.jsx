import React from "react";
import SocialLogin from "./Right-side/SocialLogin";
import FindUs from "./Right-side/FindUs";

const RightSide = () => {
  return (
    <div className="space-y-4">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
    </div>
  );
};

export default RightSide;
