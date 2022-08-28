import { ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobails, tablet } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobails} {
    height: 50px;
  }
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobails} {
    padding: 0px 5px;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${tablet} {
    flex: 0;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobails} {
    display: none;
  }
  ${tablet} {
    font-size: 12px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobails} {
    justify-content: flex-start;
    flex: 4;
    transform: scale(0.8);
  }
  ${tablet} {
    justify-content: flex-end;
    flex: 1;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobails} {
    font-size: 10px;
    margin-left: 5px;
  }
  ${tablet} {
    font-size: 11px;
    margin-left: 10px;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Center>
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <Logo>Pool AppService</Logo>
          </Link>
        </Center>
        <Right>
          <>
            <Link to="/register">
              <MenuItem>REGISTER</MenuItem>
            </Link>
            <Link to="/login">
              <MenuItem>SIGN IN</MenuItem>
            </Link>
          </>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={0} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
