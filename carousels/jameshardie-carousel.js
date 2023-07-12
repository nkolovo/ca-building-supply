import { useState } from "react";
import { items } from "./../public/company/carousel/jameshardie.json";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootstrap.module.css";

export default function JamesHardieCarousel() {
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