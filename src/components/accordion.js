import { useState } from "react";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
      style={{
        width: "100%",
        lineHeight: "40px",
        margin: "20px 0px 20px 0px"
      }}
    >
      <button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "4px",
          borderRadius: "0.25em",
          border: "none",
          background: "transparent",
          backgroundColor: "#212529",
          outline: "none",
          cursor: "pointer",
          color: 'white',
          fontSize: '30px',
          padding: "10px 0px 10px 0px"
        }}
        onClick={toggle}
        type="button"
      >
        <span>{props.title}</span>
      </button>
      <div
        style={{ display: isShowing ? "block" : "none", padding: "5px", fontSize: "24px" }}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
    </div>
  );
}