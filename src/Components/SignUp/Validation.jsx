const Validation=(values)=>{
    let errors={}

    if (!values.email) {
        errors.email='email is must'
    }
    else if (!values.email.includes('@gmail.com')) {
        errors.email = 'Email must be a valid Gmail address';
    }
    if (!values.password) {
        errors.password='password is must'
    }
   
    else if(values.password.length<=8){
        errors.password='password must be 8 characters'
    }
    return errors
}
export default Validation;