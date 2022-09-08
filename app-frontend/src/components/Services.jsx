import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import Service from "./Service";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Services = ({ filters, sort }) => {
  const [services, setServices] = React.useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams();
    searchParams.append("sort", sort);
    if (filters.category) {
      searchParams.append("category", filters.category);
    }

    const getServices = async () => {
      try {
        const res = await axios.get(
          `http://localhost:${
            process.env.REACT_APP_EXPRESS_PORT || "5000"
          }/api/services?${searchParams.toString()}`
        );
        setServices(res.data);
      } catch (err) {}
    };
    getServices();
  }, [filters, sort]);

  return (
    <Container>
      {filters.category
        ? services.map((item) => (
            <Service id={item._id} img={item.img} key={item._id} />
          ))
        : services
            .slice(0, 8)
            .map((item) => (
              <Service id={item._id} img={item.img} key={item._id} />
            ))}
    </Container>
  );
};

export default Services;
