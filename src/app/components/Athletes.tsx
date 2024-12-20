"use client";

import { css } from "../../../styled-system/css";
import { Button } from "react-aria-components";

const ATHLETES = [
  {
    name: "Marcus Johnson",
    position: "Point Guard",
    image: "/athlete1.jpg",
    quote: "These kicks give me the confidence to cross anyone up.",
    shoe: "Air Force",
  },
  {
    name: "Jin Park",
    position: "Shooting Guard",
    image: "/athlete2.jpg",
    quote: "From practice to game day, my go-to choice for pure performance.",
    shoe: "Nike Dunk",
  },
  {
    name: "David Chen",
    position: "Small Forward",
    image: "/athlete3.jpg",
    quote: "Style meets substance. These shoes are built different.",
    shoe: "Air Yezzy",
  },
];

export default function Athletes() {
  return (
    <section className={css({ bg: "zinc.950", py: 24, color: "white" })}>
      <div
        className={css({
          maxW: "1200px",
          mx: "auto",
          px: 4,
        })}
      >
        <div className={css({ textAlign: "center", mb: 16 })}>
          <h2
            className={css({
              fontSize: { base: "3xl", md: "4xl", lg: "5xl" },
              fontWeight: "bold",
              mb: 4,
            })}
          >
            COURT STORIES
          </h2>
          <p className={css({ color: "zinc.400", maxW: "2xl", mx: "auto" })}>
            From street courts to pro arenas, our athletes trust KoolKicks to
            elevate their game.
          </p>
        </div>

        <div
          className={css({
            display: "grid",
            gridTemplateColumns: { base: "1fr", md: "repeat(3, 1fr)" },
            gap: 8,
          })}
        >
          {ATHLETES.map((athlete) => (
            <div
              key={athlete.name}
              className={css({
                bg: "zinc.900",
                p: 6,
                borderRadius: "xl",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                transition: "transform 0.2s",
                _hover: {
                  transform: "translateY(-4px)",
                },
              })}
            >
              <div
                className={css({
                  aspectRatio: "1",
                  overflow: "hidden",
                  borderRadius: "lg",
                  mb: 2,
                })}
              >
                <img
                  src={athlete.image}
                  alt={athlete.name}
                  className={css({
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  })}
                />
              </div>
              <div>
                <h3
                  className={css({ fontSize: "xl", fontWeight: "bold", mb: 1 })}
                >
                  {athlete.name}
                </h3>
                <p
                  className={css({ color: "zinc.400", fontSize: "sm", mb: 4 })}
                >
                  {athlete.position}
                </p>
                <p className={css({ color: "zinc.300", fontStyle: "italic" })}>
                  &quot;{athlete.quote}&quot;
                </p>
              </div>
              <div
                className={css({
                  mt: "auto",
                  pt: 4,
                  borderTop: "1px solid",
                  borderColor: "zinc.800",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                })}
              >
                <span className={css({ color: "zinc.400", fontSize: "sm" })}>
                  Wearing {athlete.shoe}
                </span>
                <Button
                  className={css({
                    color: "white",
                    fontSize: "sm",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    _hover: { color: "zinc.300" },
                  })}
                >
                  Shop Now +
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
