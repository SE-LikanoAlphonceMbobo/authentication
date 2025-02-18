const SignupValidation = (values) => {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^[a-zA-Z0-9]{8,}$/;  // At least 8 characters, only letters and numbers

  if (!values.name.trim()) {
      error.name = "Name should not be empty";
  }
  if (!values.national_id.trim()) {  // Corrected key name
      error.national_id = "National ID shouldn't be empty";
  }
  if (!values.election_name.trim()) {  // Corrected key name
      error.election_name = "Election name cannot be empty";
  }

  if (!values.email.trim()) {
      error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
      error.email = "Invalid email format";
  }

  if (!values.password.trim()) {
      error.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
      error.password = "Password must be at least 8 characters long and contain only letters and numbers";
  }

  return error;
};

export default SignupValidation;
