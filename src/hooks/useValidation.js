import { useState, useEffect} from 'react'

const useValidation = (stateInitial, validate, fn) => {

    const [values, setValues] = useState(stateInitial);
    const [errors, setErrors] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        if(submitForm) {
            const noErrors = Object.keys(errors).length === 0;

            if(noErrors) {
                fn(); //fn= funcion que se ejecuta en el componente
            }
            setSubmitForm(false);
        }
    }, [errors, fn, submitForm]);

        //funcion que se ejecuta cuando el usuario escribe algo
        const handleChange = e => {
            setValues({
                ...values,
                [e.target.name] : e.target.value
            })
        }

        //funcion que se ejecuta cuando el usuario hace submit
        const handleSubmit = e => {
            e.preventDefault();
            const errorsValidation = validate(values);
            setErrors(errorsValidation);
            setSubmitForm(true);
        }

        //cuando se realiza el evento blur
        const handleBlur = () => {
            const errorsValidation = validate(values);
            setErrors(errorsValidation);
        }



    return { 
        values,
        errors,
        handleSubmit,
        handleChange,
        handleBlur,

    };
}
 
export default useValidation;