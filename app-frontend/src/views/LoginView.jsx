import { IconButton } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile, tablet } from "../responsive";
import GoogleIcon from "@mui/icons-material/Google";

const Container = styled.div`
  width: 110v;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.dwell.com/photos-6425018707219456000/6425019522274152448-large/modern-pool-house-exterior-designed-by-jbellessa-design-indoor-outdoor-living.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile} {
    width: 75%;
  }
  ${tablet} {
    width: 70%;
  }
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  ${tablet} {
    margin-bottom: 10px;
  }
`;
const Error = styled.span`
  color: red;
`;
const LoginView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    window.open(
      `http://localhost:${
        process.env.REACT_APP_EXPRESS_PORT !== undefined
          ? process.env.REACT_APP_EXPRESS_PORT
          : "5000"
      }/api/auth/google`,
      "_self"
    );
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            id="userN"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          ></Input>

          <Input
            id="pwd"
            placeholder="password"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>

          <Button onClick={handleClick}>LOGIN</Button>
          <IconButton onClick={handleGoogleLogin}>
            {"Login with Google"}
            &nbsp;
            <GoogleIcon fontSize="medium" />
          </IconButton>
          {error && <Error>Something went wrong...</Error>}
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginView;
