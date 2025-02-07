const LoginValidation = (values) => {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Password validation: Only alphanumeric characters (no special characters)
    const password_pattern = /^[a-zA-Z0-9]{8,}$/;  // At least 8 characters, only letters and numbers

    if (values.name === "") {
      error.name = "Name should not be empty";
    }
  
    if (values.email === "") {
      error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Email didn't match the required format!  @";
    }
  
    if (values.password === "") {
      error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
      error.password = "Use only letters and numbers";
    }
  
    return error;
  };
  
  export default LoginValidation;
  