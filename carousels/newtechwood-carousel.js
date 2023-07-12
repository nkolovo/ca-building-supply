import { useState } from "react";
import { items } from "./../public/company/carousel/newtechwood.json";
import { Carousel } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootstrap.module.css";

export default function NewTechWoodCarousel() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
          <img src={item.imageUrl} alt="slides" style={{ borderRadius: "1.5em" }} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}