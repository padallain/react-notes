import React, { useState } from "react";
import Vector from "../assets/loginvector.png";
import ImageProfile from "../assets/profile1.jpg";
import appFireBase from "../credencials";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(appFireBase);

function Login() {
  const [register, setRegister] = useState(false);

  const authentication = async (e)=>{
    e.preventDefault();
    const email= e.target.email.value;
    const password=e.target.password.value;
    console.log(password)

    if (register) {
        try {
            await createUserWithEmailAndPassword(auth,email, password)
        } catch (error) {
            alert('Asegurese que la contraseña tenga mas de 8 caracteres')
        }
    }
    else{
        try {
            await signInWithEmailAndPassword(auth,email,password)    
        } catch (error) {
            alert('El correo o la contraseña son incorrectos')
        }
        
    }
    

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body">
              <img src={ImageProfile} alt="" className="estilo-profile" />
              <form onSubmit={authentication}>
                <input
                  type="text"
                  placeholder="enter email"
                  className="cajatexto"
                  id="email"
                />
                <input
                  type="password"
                  placeholder="enter your password"
                  className="cajatexto"
                  id="password"
                />
                <button className="btnform">
                  {register ? "Register" : "Log in"}
                </button>
              </form>
              <h4 className="texto">
                {register ? "You have a account" : "You do not have account"}
                <button
                  className="btnswicth"
                  onClick={() => setRegister(!register)}
                >
                  {register ? "Log in" : "Register"}
                </button>
              </h4>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <img src={Vector} alt="" className="tamano-imagen" />
        </div>
      </div>
    </div>
  );
}

export default Login;
