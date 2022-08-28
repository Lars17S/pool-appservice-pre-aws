import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { mobails, tablet } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobails} {
    padding: 0;
    flex-direction: column;
  }
  ${tablet} {
    padding: 5px;
    flex-direction: column;
  }
`;

export const categories = [
  {
    id: 1,
    img: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/07/featured-image-pool-house.jpeg.jpg",
    title: "Albercas",
    cat: "services",
  },
  {
    id: 2,
    img: "https://www.cleansweepofamerica.com/wp-content/uploads/2020/10/office-cleaning-service.jpeg",
    title: "Mantenimiento",
    cat: "services",
  },
];

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem
          img={item.img}
          title={item.title}
          cat={item.cat}
          key={item.id}
        />
      ))}
    </Container>
  );
};

export default Categories;
