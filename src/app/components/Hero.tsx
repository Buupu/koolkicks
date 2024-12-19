"use client";

import { css } from "../../../styled-system/css";
import { vstack } from "../../../styled-system/patterns";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "react-aria-components";

export default function Hero() {
  const airRef = useRef(null);
  const jordanRef = useRef(null);

  useEffect(() => {
    // Create timeline for sequential animations
    const tl = gsap.timeline();

    // Animate "AIR"
    tl.to(airRef.current, {
      y: "0%",
      duration: 0.6,
      ease: "power2.out",
      delay: 0.3,
    });

    // Animate "JORDAN"
    tl.to(jordanRef.current, {
      y: "0%",
      duration: 0.6,
      ease: "power2.out",
      delay: -0.2,
    });
  }, []);

  return (
    <section
      className={css({
        bg: "zinc.950",
        py: 10,
        position: "relative",
        color: "white",
        height: "100vh",
        display: "flex",
        alignItems: "space-between",
        justifyContent: "center",
        overflow: "hidden",
      })}
    >
      <div
        className={vstack({
          w: "100%",
          maxW: "1080px",
          px: 2,
          position: "relative",
          gap: 0,
        })}
      >
        <header
          className={css({
            width: "100%",
            pt: 6,
            pb: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 20,
            background: "transparent",
          })}
        >
          <img
            src="/jumpman.png"
            alt="Jumpman Logo"
            className={css({
              height: "2.5rem",
              width: "auto",
              filter: "brightness(0) invert(1)",
            })}
          />
          <Button
            className={css({
              bg: "white",
              color: "black",
              px: 6,
              py: 2,
              borderRadius: "full",
              fontWeight: "medium",
              transition: "all 0.2s",
              cursor: "pointer",
              _hover: {
                bg: "zinc.200",
                transform: "translateY(-2px)",
              },
            })}
          >
            Shop Now
          </Button>
        </header>
        <div
          className={css({
            width: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "0",
            zIndex: 10,
          })}
        >
          <div className={css({ overflow: "hidden", zIndex: 3 })}>
            <h1
              ref={airRef}
              className={css({
                textAlign: "center",
                fontSize: { base: "8rem", md: "10rem", lg: "12rem" },
                fontWeight: "black",
                letterSpacing: { base: "1rem", md: "1.5rem", lg: "2rem" },
                opacity: 1,
                userSelect: "none",
                textTransform: "uppercase",
                lineHeight: 0.75,
                zIndex: 3,
                whiteSpace: "nowrap",
                color: "white",
                fontFamily: "roboto",
                transform: "translateY(100%)",
              })}
            >
              AIR
            </h1>
          </div>
          <div className={css({ overflow: "hidden", zIndex: 1, pt: 48 })}>
            <h1
              ref={jordanRef}
              className={css({
                textAlign: "center",
                fontSize: { base: "6rem", md: "11rem", lg: "15rem" },
                fontWeight: "900",
                letterSpacing: { base: "1rem", md: "1.5rem", lg: "1.60rem" },
                opacity: 1,
                userSelect: "none",
                textTransform: "uppercase",
                lineHeight: 0.8,
                whiteSpace: "nowrap",
                position: "relative",
                color: "white",
                WebkitTextFillColor: "black",
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "white",
                fontFamily: "roboto",
                transform: "translateY(100%)",
                _after: {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, transparent -30%, rgba(9,9,11,0.5) 10%, rgba(9,9,11,1) 80%)",
                  pointerEvents: "none",
                },
              })}
            >
              JORDAN
            </h1>
            <div
              className={css({
                zIndex: 2,
                position: "absolute",
                inset: "-40px",
                bg: "zinc.800",
                borderRadius: "3xl",
                filter: "blur(140px)",
                w: "50%",
                h: "50%",
                opacity: 0.7,
                left: "50%",
                transform: "translate(-50%, -50%)",
                top: "50%",
              })}
            ></div>
            <div
              className={css({
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "65%",
                height: "65%",
                zIndex: 4,
              })}
            >
              <img
                src="/shoe1.png"
                alt="Featured Sneaker"
                className={css({
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 2,
                })}
              />
            </div>
          </div>
        </div>

        <div
          className={css({
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            animation: "bounce 2s infinite",
            cursor: "pointer",
            zIndex: 10,
          })}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={css({
              color: "white",
            })}
          >
            <path d="M7 13l5 5 5-5" />
            <path d="M7 6l5 5 5-5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
