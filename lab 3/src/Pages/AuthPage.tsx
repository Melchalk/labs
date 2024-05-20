import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useAppDispatch } from "../redux/hooks";
import { useEffect, useState } from "react";
import { RegisterRequest, loginUser, registerUser } from "../Api/AuthApi";
import { addToken } from "../redux/AuthSlice";
import { useNavigate } from "react-router";

export function LogoutPage() {
  const dispatch = useAppDispatch();

  useEffect(() => { 
      dispatch(addToken(null));
  });

  return (
    <h1>Successful account logout</h1>
  );
}

export function LoginPage() {
    const [statePhone, setStatePhone] = useState<string>("");
    const [statePassword, setStatePassword] = useState<string>("");   
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onLoginUser = () => {
      loginUser(statePhone, statePassword)
        .then((res) =>{
            dispatch(addToken(res.data?.accessToken));
            navigate('/home');
        })
    };

    return (
      <>
        <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3">
          <Form.Control type="phone" placeholder="name@example.com" onChange={(t) => setStatePhone(t.target.value)}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" onChange={(t) => setStatePassword(t.target.value)}/>
        </FloatingLabel>
        <br />
        <Button variant="warning" onClick={() => onLoginUser()}>Ok</Button>
      </>
    );
}

export function RegisterPage() {
  const [stateRequest, setStateRequest] = useState<RegisterRequest>({
    userName: '',
    userPhone: '',
    userPassword:''
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onRegisterUser = () => {
    registerUser(stateRequest)
      .then((res) =>{
          dispatch(addToken(res.data?.accessToken));
          navigate('/home');
      })
  };

  return (
    <>
      <FloatingLabel label="Name" className="mb-3">
        <Form.Control placeholder="Name" onChange={(t) => 
          setStateRequest({...stateRequest, userName: t.target.value})}/>
      </FloatingLabel>
      <FloatingLabel label="Phone" className="mb-3">
        <Form.Control placeholder="Phone" onChange={(t) => 
          setStateRequest({...stateRequest, userPhone: t.target.value})}/>
      </FloatingLabel>
      <FloatingLabel label="Password">
        <Form.Control type="password" placeholder="Password" onChange={(t) => 
          setStateRequest({...stateRequest, userPassword: t.target.value})}/>
      </FloatingLabel>
      <br />
      <Button variant="warning" onClick={() => onRegisterUser()}>Ok</Button>
    </>
  );
}