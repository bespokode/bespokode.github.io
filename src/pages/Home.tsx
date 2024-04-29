import React from "react";
import { Image, Stack } from "react-bootstrap";
import { bg_index_image } from "../assets";

const Home = () => {
  return (
    <Stack className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div className="w-100 overflow-hidden h-100  ">
        <Image
          src={bg_index_image}
          className="opacity-25 w-100 h-100 object-fit-cover "
        />
        <h1 className="text-center my-auto font-astro position-absolute top-50 start-50 translate-middle">
          BespoKode Solutions
          <br />
          Software
        </h1>
      </div>
      <div>
        <h1>hola</h1>
      </div>
    </Stack>
  );
};

export default Home;
