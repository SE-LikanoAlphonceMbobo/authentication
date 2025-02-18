import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupValidation from "./SignupValidation";
import axios from "axios";

const Signup = () => {

    // state of sign up
    const[values,setValues]  = useState({
        name: '',
        email: '',
        password: '',
    });

    // navigating
    const navigate = useNavigate();

    // validation error handling
    const [errors, setErrors] = useState({});

    // handle input
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name] : event.target.value}))
    }

    // login submit
    const handleSubmit = (event) => {
      event.preventDefault();
      const validationErrors = SignupValidation(values);
      setErrors(validationErrors);
  
      // Ensure there are no validation errors before submitting
      if (Object.keys(validationErrors).length === 0) {
          axios.post('http://localhost:8081/reactsignup', values)
              .then(res => {
                  navigate('/');
              })
              .catch(err => console.log(err));
      }
  };
  

    return(
      <>
      <div style={styles.container}>
            <div style={styles.cardTop}><h2 style={styles.h2}>Blockchain Voting</h2></div>
            <div style={styles.cardBelow}>
              <div style={styles.card1}>
              <h1 style={styles.h1}> Welcome To Blockchain Voting</h1>
              </div> 
              <div style={styles.card2}>                  
                <h2 style={styles.title}>Sign up</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                  <div style={styles.formGroup}>
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input type="text" placeholder="Enter Name" name="name"
                    onChange={handleInput} className="form-control rounded-0"/>
                    {errors.name && <span className="text-danger">{errors.name}</span>}
                  </div>
                  <div style={styles.formGroup}>
                  <label htmlFor="email"><strong>Email</strong></label>
                                <input type="email" placeholder="Enter Email" name="email"
                                 onChange={handleInput} className="form-control rounded-0"/>
                                {errors.email && <span className="text-danger">{errors.email}</span>}
                  </div>
                  <div style={styles.formGroup}>
                  <label htmlFor="password"><strong>Password</strong></label>
                                <input type="password" placeholder="Enter Password" name="password"
                                 onChange={handleInput} className="form-control rounded-0" />
                                {errors.password && <span className="text-danger">{errors.password}</span>}
                  </div>
      
                  <div style={styles.Buttons}> 
                  <button type="submit" style={styles.button}><strong>Sign Up</strong></button>
                    <p style={styles.p2}>Have registered..?</p>
                    <Link to="/" style={styles.button}>Login</Link>       
                </div>
                  </form>
              </div>
            </div>
            <footer style={styles.cardTop}>
              <p style={styles.p1}>Copyright © 2025</p>
            </footer>
          </div>


        
    </>
    )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#e8f4f8',
    padding: '20px',
  },
  cardTop:{
    backgroundColor: '#7BD3EA',
    borderRadius: '4px',
    boxShadow: '0 4px 8px hsla(196, 82.00%, 73.90%, 0.10)',
    padding: '5px',
    width: '100%',
    maxWidth: '1200px',
    marginTop: '25px',
  },
  cardBelow:{
    backgroundColor: '#e8f4f8',
    borderRadius: '4px',
    boxShadow: '0 4px 8px hsla(196, 82.00%, 73.90%, 0.10)',
    padding: '5px',
    width: '100%',
    maxWidth: '1200px',
    marginTop: '2px',
    display: 'flex',
    
  },
  h2:{
    color: '#fff',
  },
  h1:{
    color: '#000000',
  },
  p1:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '550px'
  },
  p2:{
    paddingRight: '160px'
  },
  card1: {
    borderRadius: '10px',
    paddingTop: '120px',
    width: '100%',
    maxWidth: '200px',
    textAlign: 'center',
    margin: '30px'
  },
  card2: {
    backgroundColor: '#ffffff',
    borderRadius: '5px',
    padding: '40px',
    width: '100%',
    maxWidth: '750px',
    textAlign: 'center',
    marginLeft:'90px'
  },
  title: {
    backgroundColor: '#7BD3EA',
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  placeholder:{
    borderRadius: '20px',
    backgroundColor: '#e8f4f8',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '45px',
  },
  formGroup: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555',
    borderRadius: '10px',
    border: '2px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  Buttons:{
    display: 'flex',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '15px',
    fontSize: '16px',
    cursor: 'pointer',
    marginRight: '75px'
    
  },
  
  signupLink: {
    color: '#007bff',
    textDecoration: 'none',
  },
  footer: {
    marginTop: '20px',
    fontSize: '0.8em',
    color: '#666',
  },
};

export default Signup