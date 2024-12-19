"use client";

import { css } from "../../../styled-system/css";

const FEATURED_SHOES = [
  {
    name: "Air Force",
    image: "/featured1.png",
    bgColor: "#DDBBFE", // Pastel pink
  },
  {
    name: "Nike Dunk",
    image: "/featured2.png",
    bgColor: "#FFC38D", // Pastel purple
  },
  {
    name: "Air Yezzy",
    image: "/featured3.png",
    bgColor: "#75D9C6", // Pastel blue
  },
];

export default function Featured() {
  return (
    <section
      className={css({
        bg: "zinc.950",
        py: 24,
        px: 4,
      })}
    >
      <div
        className={css({
          maxW: "1200px",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          gap: 8,
        })}
      >
        {FEATURED_SHOES.map((shoe) => (
          <div
            key={shoe.name}
            className={css({
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              bg: "zinc.900",
              p: 6,
              borderRadius: "xl",
              cursor: "pointer",
              transition: "all 0.3s ease",
              _hover: {
                transform: "translateY(-8px)",
              },
            })}
          >
            <div
              className={css({
                position: "relative",
                width: "100%",
                aspectRatio: "1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              })}
            >
              <div
                style={{ backgroundColor: shoe.bgColor }}
                className={css({
                  position: "absolute",
                  width: "75%",
                  height: "75%",
                  borderRadius: "lg",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                })}
              />
              <img
                src={shoe.image}
                alt={shoe.name}
                className={css({
                  minW: "100%",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 1,
                  transform: "rotate(-45deg) scale(1.3) translate(-5%, -5%)",
                })}
              />
            </div>
            <h3
              className={css({
                color: "white",
                fontSize: "2xl",
                fontWeight: "bold",
              })}
            >
              {shoe.name}
            </h3>
            <a
              className={css({
                color: "zinc.400",
                display: "flex",
                alignItems: "center",
                gap: 2,
                _hover: { color: "white" },
              })}
            >
              Shop now <span>+</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
