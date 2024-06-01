

import { useState } from "react";

//importando los modulos de firebase
import appFireBase from "./credencials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFireBase);

//importar nuestros componentes
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [user,setUser]=useState(null)

  onAuthStateChanged(auth,(usuarioFireBase)=>{
    if(usuarioFireBase){
      setUser(usuarioFireBase)
    }
    else{
      setUser(null)
    }
  })
  return <div>
    {user ? <Home userEmail= {user.email}/>: <Login/>}
  </div>;
}

export default App;
