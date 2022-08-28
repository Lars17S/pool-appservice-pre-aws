import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobails, tablet } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobails} {
    height: 35vh;
  }
  ${tablet} {
    height: 45vh;
  }
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ img, title, cat }) => {
  let navigate = useNavigate();
  const routeChange = (type) => {
    navigate("/products", { state: type });
  };
  return (
    <Container>
      <Image src={img} />
      <Info>
        <Title>{title}</Title>
        <Button onClick={() => routeChange(cat)}>Solicitar</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
