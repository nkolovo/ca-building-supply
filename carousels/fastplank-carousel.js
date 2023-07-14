import { useState } from "react";
import { items } from "./../public/company/carousel/fastplank.json";
import { Carousel } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Carousel.module.css";

export default function FastPlankCarousel() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {bootstrap.map((item) => (
        <Carousel.Item className={styles.itemP} interval={4000}>
          <img src={item.imageUrl} alt="slides" />
        </Carousel.Item>
      ))
      }
    </Carousel >
  );
}