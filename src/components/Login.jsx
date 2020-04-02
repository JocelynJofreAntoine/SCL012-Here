import firebase from "./firebase";
import "./Login.css";
import logo from '../img/logo.png';
import React, {Fragment } from "react";
import { Link, withRouter } from "react-router-dom";


//validaciones
import useValidation from "../hooks/useValidation.js";
import validateLogin from '../validate/validateLogin';

const STATE_INICIAL = {
  email: '',
  password: ''
}

const SignIn = (props) => {

  async function login() {
    try {
      await firebase.login(email, password);
      if(!(await firebase.hashTable(firebase.auth.currentUser.uid))){
        await firebase.createUserTable()
      }
      props.history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }

  const { values, errors, handleSubmit, handleChange, handleBlur } = useValidation ( STATE_INICIAL, validateLogin, login );

  const { email, password } = values;

   

  return (
    <Fragment>

      <div class="first_view">
       <header className="app_header">
        <img src={logo} className="huellas_logo" alt="logo" />
      </header>
                       
      <h5>Si ya tienes cuenta en Huellas, ingresa el correo electrónico y contraseña que registraste </h5>
      
      <form className="row" onSubmit={handleSubmit} noValidate>
       <h5>Ingresa tu correo electrónico*</h5>
          <input class="email"
            placeholder="Ingresa Email"
            className="form-control"
            type="email"
            name="email"
            autoComplete="off"
            autoFocus
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
        <h5>Ingresa tu email*</h5>
          

          {errors.email && <p>{errors.email}</p>}

          <div>
          <input
            placeholder="Ingresa Contraseña"
            className="form-control"
            type="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          </div>



          {errors.password && <p>{errors.password}</p>}

          <div>
          <button class="send"
            to="/home-pages"
            type="submit"
            
          >
            Enviar
          </button>


{/* BOTON DE INGRESO CON FACEBOOK*/}

          <button class="login_facebook"
            to="/home-pages"
            type="submit"
          >
            <Link to="/home-page">Ingresa con Facebook</Link>
           </button>

          
{/* BOTON DE INGRESO CON GOOGLE*/}

          <button class="login_google"
            to="/home-pages"
            type="submit"
          >
            <Link to="/home-page">Ingresa con Google</Link>
          </button>

{/* BOTON DE INGRESO- LOGIN*/}

          <button class="login"
            to="/home-pages"
            type="submit"
            to="/register"
            className="btn btn-secondary"
          >
            <Link to="/home-page">Ingresar</Link>
          </button>
          </div>
        
      </form>
      </div>
    </Fragment>
  );
};

export default withRouter(SignIn);
