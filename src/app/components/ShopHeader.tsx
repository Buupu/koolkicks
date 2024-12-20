"use client";

import { css } from "../../../styled-system/css";
import {
  Button,
  DialogTrigger,
  Popover,
  Dialog,
  OverlayArrow,
} from "react-aria-components";
import Link from "next/link";

// Temporary cart data for demo
const CART_ITEMS = [
  {
    id: 1,
    name: "Air Jordan 1 Retro High",
    price: 180,
    size: "US 10",
    color: "Chicago",
    image: "/shoe1.png",
  },
  {
    id: 2,
    name: "Nike Dunk Low",
    price: 125,
    size: "US 9",
    color: "University Blue",
    image: "/featured2.png",
  },
];

export default function ShopHeader() {
  const cartCount = CART_ITEMS.length;
  const cartTotal = CART_ITEMS.reduce((total, item) => total + item.price, 0);

  return (
    <header
      className={css({
        position: "sticky",
        top: 0,
        bg: "zinc.950",
        borderBottom: "1px solid",
        borderColor: "zinc.900",
        zIndex: 50,
      })}
    >
      <div
        className={css({
          maxW: "1200px",
          mx: "auto",
          px: 4,
          py: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        })}
      >
        <Link href="/">
          <img
            src="/jumpman.png"
            alt="KoolKicks Logo"
            className={css({
              height: "2.5rem",
              width: "2.5rem",
              objectFit: "contain",
              filter: "brightness(0) invert(1)",
            })}
          />
        </Link>

        <DialogTrigger>
          <Button
            className={css({
              color: "zinc.400",
              p: 2,
              borderRadius: "md",
              position: "relative",
              _hover: { color: "white" },
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={css({ w: 6, h: 6 })}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            {cartCount > 0 && (
              <span
                className={css({
                  position: "absolute",
                  top: 0,
                  right: 0,
                  transform: "translate(25%, -25%)",
                  bg: "white",
                  color: "black",
                  w: 5,
                  h: 5,
                  borderRadius: "full",
                  fontSize: "xs",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                })}
              >
                {cartCount}
              </span>
            )}
          </Button>
          <Popover className={css({ w: "360px" })}>
            <OverlayArrow>
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                className={css({ fill: "zinc.900" })}
              >
                <path d="M0 0 L6 6 L12 0" />
              </svg>
            </OverlayArrow>
            <Dialog>
              <div
                className={css({
                  bg: "zinc.900",
                  borderRadius: "xl",
                  boxShadow: "xl",
                  p: 4,
                  border: "1px solid",
                  borderColor: "zinc.800",
                })}
              >
                <div className={css({ mb: 4 })}>
                  <h3
                    className={css({
                      fontSize: "lg",
                      fontWeight: "bold",
                      color: "white",
                      mb: 2,
                    })}
                  >
                    Shopping Cart ({cartCount})
                  </h3>
                  <div className={css({ h: "1px", bg: "zinc.800", mb: 4 })} />
                  {CART_ITEMS.map((item) => (
                    <div
                      key={item.id}
                      className={css({
                        display: "flex",
                        gap: 4,
                        mb: 4,
                        pb: 4,
                        borderBottom: "1px solid",
                        borderColor: "zinc.800",
                        _last: { mb: 0, pb: 0, border: "none" },
                      })}
                    >
                      <div
                        className={css({
                          w: 16,
                          h: 16,
                          bg: "zinc.800",
                          borderRadius: "lg",
                          p: 2,
                          flexShrink: 0,
                        })}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className={css({
                            w: "full",
                            h: "full",
                            objectFit: "contain",
                            transform: "rotate(-20deg)",
                          })}
                        />
                      </div>
                      <div className={css({ flex: 1 })}>
                        <h4
                          className={css({
                            fontSize: "sm",
                            fontWeight: "medium",
                            color: "white",
                          })}
                        >
                          {item.name}
                        </h4>
                        <p
                          className={css({
                            fontSize: "xs",
                            color: "zinc.400",
                            mt: 1,
                          })}
                        >
                          {item.size} • {item.color}
                        </p>
                        <p
                          className={css({
                            fontSize: "sm",
                            fontWeight: "medium",
                            color: "white",
                            mt: 2,
                          })}
                        >
                          ${item.price}
                        </p>
                      </div>
                      <Button
                        className={css({
                          color: "zinc.500",
                          p: 1,
                          _hover: { color: "white" },
                        })}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={css({ w: 5, h: 5 })}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </Button>
                    </div>
                  ))}
                </div>
                <div
                  className={css({
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 4,
                  })}
                >
                  <span className={css({ color: "zinc.400" })}>Subtotal</span>
                  <span className={css({ color: "white", fontWeight: "bold" })}>
                    ${cartTotal}
                  </span>
                </div>
                <Button
                  className={css({
                    w: "full",
                    bg: "white",
                    color: "black",
                    py: 3,
                    rounded: "lg",
                    fontWeight: "medium",
                    _hover: { bg: "zinc.200" },
                  })}
                >
                  Checkout
                </Button>
              </div>
            </Dialog>
          </Popover>
        </DialogTrigger>
      </div>
    </header>
  );
}
