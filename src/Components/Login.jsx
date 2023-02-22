import React, {useState} from 'react'
import SIgn_img from './SIgn_img';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const history = useNavigate();
const [inpval, setInpval] = useState({
  
  email: "",
 password: "",
});

const [data, setData] = useState([]);

const addData = (e) => {
  e.preventDefault();

  const getuserArr = localStorage.getItem("userdata");
  
  const { email, password } = inpval;

 
   if (email === "") {
    alert("email field is required");
  } else if (!email.includes("@")) {
    alert("plz enter valid email address");
  } else if (!email.includes(".")) {
    alert("plz enter valid email address");
  }  else if (password === "") {
    alert("password field is required");
  } else if (password.length < 8) {
    alert("password length should be greater than Eight");
  } else{
    if(getuserArr && getuserArr.length){
        const user = JSON.parse(getuserArr);
        const userlogin = user.filter((el,k)=>{
            return el.email === email && el.password === password
        });
       if(userlogin.length === 0){
        alert("invalid details")
       }else{
        alert("user login succesfully");
        localStorage.setItem("user_login", JSON.stringify(userlogin));
        history("/details");
       }
    }
  }
};

const getdata = (e) => {
  // console.log(e.target.value);
  const { value, name } = e.target;
  //   console.log(value,name);
  setInpval(() => {
    return {
      ...inpval,
      [name]: value,
    };
  });
};
   

    
  return (
    <>
      <div className="container mt-3 ">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign IN</h3>
            <Form>
              

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                   onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group
                className="mb-6"
                controlId="formBasicCheckbox"
              ></Form.Group>
              <Button
                variant="primary"
                className="col-lg-6"
              onClick={addData}
                style={{ background: "rgb(67, 185,127)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an Account <span>SignIn </span>
            </p>
          </div>
         <SIgn_img/>
        </section>
      </div>
    </>
  );
}

export default Login
