import { useState } from "react";
import { Carousel } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Carousel.module.css";

export default function CapeCodCarousel(images) {
  const { bootstrap } = images;
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