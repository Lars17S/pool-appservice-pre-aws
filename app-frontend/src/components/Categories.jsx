import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile} {
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
    category: "installation-package",
  },
  {
    id: 2,
    img: "https://www.cleansweepofamerica.com/wp-content/uploads/2020/10/office-cleaning-service.jpeg",
    title: "Mantenimiento",
    category: "maintenance",
  },
];

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem
          img={item.img}
          title={item.title}
          category={item.category}
          key={item.id}
        />
      ))}
    </Container>
  );
};

export default Categories;
