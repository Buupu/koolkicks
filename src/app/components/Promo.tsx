"use client";

import { css } from "../../../styled-system/css";
import { Button } from "react-aria-components";

export default function Promo() {
  return (
    <section
      className={css({
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 12,
        color: "white",
        bg: "zinc.950",
      })}
    >
      <div
        className={css({
          position: "relative",
          maxW: "1200px",
          px: 8,
          mx: 4,
          width: "100%",
          height: "100%",
          borderRadius: "3xl",
          overflow: "hidden",
          _before: {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/promo-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)",
            zIndex: 0,
          },
        })}
      >
        <div
          className={css({
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 6,
          })}
        >
          <h2
            className={css({
              fontSize: { base: "5rem", md: "7rem", lg: "9rem" },
              fontWeight: "black",
              lineHeight: 0.9,
              letterSpacing: "tight",
              textTransform: "uppercase",
            })}
          >
            HOOP DREAMS
          </h2>
          <p
            className={css({
              fontSize: { base: "xl", md: "2xl" },
              maxW: "2xl",
              color: "zinc.200",
            })}
          >
            From the court to the streets. Elevate your game with our collection
            of iconic basketball sneakers that define both performance and
            style.
          </p>
          <Button
            className={css({
              alignSelf: "flex-start",
              bg: "white",
              color: "black",
              px: 8,
              py: 3,
              borderRadius: "full",
              fontSize: "lg",
              fontWeight: "medium",
              transition: "all 0.2s",
              cursor: "pointer",
              _hover: {
                bg: "zinc.200",
                transform: "translateY(-2px)",
              },
            })}
          >
            SHOP NOW
          </Button>
        </div>
      </div>
    </section>
  );
}
