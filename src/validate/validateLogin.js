export default function validateRegister(values) {
    let errors = {};

    //validar el email
    if(!values.email) {
        errors.email ="El e-mail es obligatorio";
    }else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
        errors.email = "Email no valido"
    }

    //validar el password
    if(!values.password) {
        errors.password = "La contraseña es oblogatoria"
    }else if(values.password.length < 6) {
        errors.password = "La contraseña debe ser de al menos 6 caracteres"

    }

    return errors;
}