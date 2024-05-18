import React from "react";
import appFireBase from "../credencials";
import {
    getAuth,
    signOut
  } from "firebase/auth";


const auth = getAuth(appFireBase);

function Home({ userEmail }) {
  return (
    <div>
      <h2 className="text-center">
        Welcome {userEmail} <button className="btn btn-primary" onClick={()=>signOut(auth)}>Log Out</button>
      </h2>
    </div>
  );
}

export default Home;
