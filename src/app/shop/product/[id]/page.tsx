"use client";

import { css } from "../../../../../styled-system/css";
import { Button, Breadcrumbs, Breadcrumb } from "react-aria-components";
import { useState } from "react";
import Link from "next/link";
import { COLORS, SIZES } from "@/lib/constants";
import dynamic from "next/dynamic";
import { breadcrumbStyles } from "@/components/styles";
import Accordion from "@/components/Accordion";

const ShoeModel = dynamic(() => import("@/components/ShoeModel"), {
  ssr: false,
  loading: () => (
    <div
      className={css({
        w: "full",
        h: "full",
        bg: "zinc.900",
        borderRadius: "2xl",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      Loading 3D Model...
    </div>
  ),
});

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(COLORS[0].value);

  // In a real app, we would fetch the product data based on the ID
  const product = {
    id,
    name: "Air Jordan 1 Retro High",
    price: 180,
    description:
      "The Air Jordan 1 Retro High sets the standard for basketball sneakers. With its iconic silhouette and premium materials, this shoe delivers both style and performance.",
    image: "/shoe1.png",
    category: "Basketball",
  };

  return (
    <main className={css({ bg: "zinc.950", minH: "100vh", color: "white" })}>
      <div
        className={css({
          maxW: "1200px",
          mx: "auto",
          px: 4,
          pb: 16,
        })}
      >
        <nav className={css({ mb: 8, py: 4 })}>
          <div className={breadcrumbStyles}>
            <Breadcrumbs>
              <Breadcrumb>
                <Link href="/">Home</Link>
              </Breadcrumb>
              <Breadcrumb>
                <Link href="/shop">Shop</Link>
              </Breadcrumb>
              <Breadcrumb>
                <Link href={`/shop?category=${product.category}`}>
                  {product.category}
                </Link>
              </Breadcrumb>
              <Breadcrumb>
                <Link href={`/shop/product/${id}`}>{product.name}</Link>
              </Breadcrumb>
            </Breadcrumbs>
          </div>
        </nav>

        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: 16,
          })}
        >
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: { base: "1fr", lg: "1fr 1fr" },
              gap: { base: 12, lg: 24 },
            })}
          >
            {/* Product Image - replaced with 3D Model */}
            <div
              className={css({
                bg: "zinc.900",
                borderRadius: "2xl",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                aspectRatio: "1",
              })}
            >
              <ShoeModel />
            </div>

            {/* Product Info */}
            <div>
              <h1
                className={css({
                  fontSize: { base: "3xl", md: "4xl" },
                  fontWeight: "bold",
                  mb: 2,
                })}
              >
                {product.name}
              </h1>
              <span
                className={css({
                  fontSize: "2xl",
                  fontWeight: "bold",
                  mb: 6,
                  display: "block",
                })}
              >
                ${product.price}
              </span>
              <p
                className={css({
                  color: "zinc.400",
                  mb: 8,
                  maxW: "xl",
                  lineHeight: "relaxed",
                })}
              >
                {product.description}
              </p>

              {/* Color Selection */}
              <div className={css({ mb: 8 })}>
                <h3
                  className={css({
                    fontSize: "sm",
                    fontWeight: "medium",
                    mb: 3,
                  })}
                >
                  COLOR
                </h3>
                <div className={css({ display: "flex", gap: 3 })}>
                  {COLORS.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.value)}
                      className={css({
                        w: 10,
                        h: 10,
                        rounded: "full",
                        border: "2px solid",
                        borderColor:
                          selectedColor === color.value
                            ? "white"
                            : "transparent",
                        p: 0.5,
                        cursor: "pointer",
                        transition: "all 0.2s",
                      })}
                      title={color.name}
                    >
                      <div
                        style={{ backgroundColor: color.value }}
                        className={css({
                          w: "full",
                          h: "full",
                          rounded: "full",
                        })}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className={css({ mb: 8 })}>
                <h3
                  className={css({
                    fontSize: "sm",
                    fontWeight: "medium",
                    mb: 3,
                  })}
                >
                  SIZE
                </h3>
                <div
                  className={css({
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
                    gap: 2,
                  })}
                >
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={css({
                        py: 3,
                        rounded: "lg",
                        fontSize: "sm",
                        fontWeight: "medium",
                        bg: selectedSize === size ? "white" : "zinc.900",
                        color: selectedSize === size ? "black" : "zinc.400",
                        border: "1px solid",
                        borderColor: "zinc.800",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        _hover: {
                          bg: selectedSize === size ? "zinc.200" : "zinc.800",
                        },
                      })}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                className={css({
                  w: "full",
                  bg: selectedSize && selectedColor ? "white" : "zinc.800",
                  color: selectedSize && selectedColor ? "black" : "zinc.500",
                  py: 4,
                  rounded: "xl",
                  fontSize: "lg",
                  fontWeight: "medium",
                  cursor:
                    selectedSize && selectedColor ? "pointer" : "not-allowed",
                  transition: "all 0.2s",
                  _hover: {
                    bg: selectedSize && selectedColor ? "zinc.200" : "zinc.800",
                  },
                })}
                isDisabled={!selectedSize || !selectedColor}
              >
                {selectedSize && selectedColor
                  ? "Add to Cart"
                  : "Select size and color"}
              </Button>
            </div>
          </div>

          {/* FAQ Accordion section */}
          <Accordion />
        </div>
      </div>
    </main>
  );
}
