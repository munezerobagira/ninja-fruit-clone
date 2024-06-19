import { useInitData } from "@vkruglikov/react-telegram-web-app";
import React from "react";

function Profile() {
  const [initDataUnsafe, initData] = useInitData();
  return (
    <>
      <h1>Profile</h1>
      <pre>{JSON.stringify(initData, null, 2)}</pre>
    </>
  );
}

export default Profile;
