"use client";

import { css } from "../../../styled-system/css";
import { Button } from "react-aria-components";

const PRODUCTS = [
  {
    id: 1,
    name: "Air Force 1 '07",
    price: 110,
    image: "/featured1.png",
    category: "Lifestyle",
    colorway: "White/Black",
  },
  {
    id: 2,
    name: "Nike Dunk Low",
    price: 125,
    image: "/featured2.png",
    category: "Basketball",
    colorway: "University Blue/White",
  },
  {
    id: 3,
    name: "Air Yeezy 2",
    price: 245,
    image: "/featured3.png",
    category: "Lifestyle",
    colorway: "Pure Platinum",
  },
  {
    id: 4,
    name: "Jordan 1 Retro High",
    price: 180,
    image: "/shoe1.png",
    category: "Basketball",
    colorway: "Chicago",
  },
  // Add more products as needed
];

const FILTERS = {
  categories: ["All", "Basketball", "Lifestyle", "Running", "Training"],
  sortOptions: ["Newest", "Price: Low to High", "Price: High to Low"],
};

export default function Shop() {
  return (
    <main
      className={css({ bg: "zinc.950", minH: "100vh", py: 24, color: "white" })}
    >
      <div
        className={css({
          maxW: "1200px",
          mx: "auto",
          px: 4,
        })}
      >
        {/* Header */}
        <div className={css({ textAlign: "center", mb: 16 })}>
          <h1
            className={css({
              fontSize: { base: "3xl", md: "4xl", lg: "5xl" },
              fontWeight: "bold",
              mb: 4,
            })}
          >
            THE COLLECTION
          </h1>
          <p className={css({ color: "zinc.400", maxW: "2xl", mx: "auto" })}>
            Premium kicks for every court, street, and occasion.
          </p>
        </div>

        {/* Filters */}
        <div
          className={css({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 12,
            gap: 4,
            flexWrap: "wrap",
          })}
        >
          <div className={css({ display: "flex", gap: 2 })}>
            {FILTERS.categories.map((category) => (
              <Button
                key={category}
                className={css({
                  px: 4,
                  py: 2,
                  borderRadius: "full",
                  fontSize: "sm",
                  bg: category === "All" ? "white" : "zinc.900",
                  color: category === "All" ? "black" : "zinc.400",
                  _hover: {
                    bg: category === "All" ? "zinc.200" : "zinc.800",
                  },
                })}
              >
                {category}
              </Button>
            ))}
          </div>
          <select
            className={css({
              bg: "zinc.900",
              color: "white",
              px: 4,
              py: 2,
              borderRadius: "full",
              outline: "none",
              cursor: "pointer",
              _focus: { ring: 2, ringColor: "white" },
            })}
          >
            {FILTERS.sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Product Grid */}
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: {
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 8,
          })}
        >
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className={css({
                bg: "zinc.900",
                borderRadius: "xl",
                overflow: "hidden",
                transition: "transform 0.2s",
                cursor: "pointer",
                _hover: {
                  transform: "translateY(-4px)",
                },
              })}
              onClick={() =>
                (window.location.href = `/shop/product/${product.id}`)
              }
            >
              <div
                className={css({
                  bg: "zinc.800",
                  aspectRatio: "1",
                  p: 8,
                  position: "relative",
                })}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={css({
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    transform: "rotate(-20deg) scale(1.2)",
                  })}
                />
              </div>
              <div className={css({ p: 6 })}>
                <div
                  className={css({
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 2,
                  })}
                >
                  <div>
                    <h3
                      className={css({
                        fontSize: "xl",
                        fontWeight: "bold",
                        mb: 1,
                      })}
                    >
                      {product.name}
                    </h3>
                    <p className={css({ color: "zinc.400", fontSize: "sm" })}>
                      {product.category} • {product.colorway}
                    </p>
                  </div>
                  <span className={css({ fontWeight: "bold", fontSize: "lg" })}>
                    ${product.price}
                  </span>
                </div>
                <div
                  className={css({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "zinc.400",
                    fontSize: "sm",
                    mt: 4,
                  })}
                >
                  <span>View Details</span>
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
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
