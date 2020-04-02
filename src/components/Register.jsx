import React, {Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "./firebase";
import logo from '../img/logo.png';
import "./Register.css";

//validaciones
import useValidation from "../hooks/useValidation.js";
import validateRegister from '../validate/validateRegister';


const STATE_INICIAL = {
  name: '',
  email: '',
  password: ''
}

const Register = (props) => {

  async function onRegister() {
    try {
      await firebase.register(name, email, password);
      props.history.replace("/dashboard");
    } catch (error) {
      console.error('Hubo un error al crear el usuario', error.message);
    }
  }
  
  const { values, errors, handleSubmit, handleChange, handleBlur } = useValidation ( STATE_INICIAL, validateRegister, onRegister );

  const { name, email, password } = values;

 

  return (
    <Fragment>
          <div class="second_view">
            <header className="app_header">
              <img src={logo} className="huellas_logo" alt="logo" />
            </header>
      
            <h5>Registrate con redes sociales o creando una cuenta </h5>
      
          <form className="row" onSubmit={handleSubmit} noValidate>
            <h5>Ingresa tu correo electrónico*</h5>
          <div>
            <label htmlFor="nombre">Ingresa tu nombre</label>
          <input
            type="tex"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="form-control"
            autoComplete="off"
            autoFocus
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          </div>
           {errors.name && <p>{errors.name}</p>}

          <div>
          <h5>Ingresa tu email*</h5>
          <label htmlFor="nombre">Ingresa tu correo electronico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your e-mail"
            className="form-control"
            autoComplete="off"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          </div>
           {errors.email && <p>{errors.email}</p>}

          <div>
          <label htmlFor="password">Crea una contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            className="form-control"
            autoComplete="off"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          </div>
           {errors.password && <p>{errors.password}</p>}

{/* BOTON DE INGRESO CON FACEBOOK*/}

          <button class="register_facebook"
            to="/home-pages"
            type="submit"
          >
            <Link to="/home-page">Ingresa con Facebook</Link>
          </button>

{/* BOTON DE INGRESO CON GOOGLE*/}

          <button class="register_google"
            to="/home-pages"
            type="submit"
          >
            <Link to="/home-page">Ingresa con Google</Link>
          </button>

{/* BOTON DE registro*/}

          <button class="login"
            type="submit"
            onClick={onRegister}
          >
            Registrar
          </button>

{/* BOTON DE VOLVER A LOGIN*/}

          <h6>Si ya estas registrado ingresa <button class="return_login"
            type="submit" >
            <Link to="/">aquí</Link>
          </button>
          </h6>
        
      </form>
      </div>
    </Fragment>
  );
}

export default withRouter(Register);
