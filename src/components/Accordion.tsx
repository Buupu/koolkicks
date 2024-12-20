"use client";

import { css } from "../../styled-system/css";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={css({
        borderBottom: "1px solid",
        borderColor: "zinc.800",
      })}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={css({
          w: "full",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 4,
          cursor: "pointer",
          bg: "transparent",
          border: "none",
          color: "white",
          textAlign: "left",
          _hover: {
            opacity: 0.8,
          },
        })}
      >
        <span className={css({ fontSize: "lg", fontWeight: "medium" })}>
          {title}
        </span>
        <IoChevronDown
          className={css({
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          })}
        />
      </button>
      <div
        className={css({
          maxH: isOpen ? "500px" : "0",
          overflow: "hidden",
          transition: "all 0.3s ease-in-out",
          color: "zinc.400",
          lineHeight: "relaxed",
        })}
      >
        <div className={css({ pb: 4 })}>{children}</div>
      </div>
    </div>
  );
}

export default function Accordion() {
  return (
    <div className={css({ mt: 16 })}>
      <h2
        className={css({
          fontSize: "2xl",
          fontWeight: "bold",
          mb: 6,
        })}
      >
        Frequently Asked Questions
      </h2>
      <div>
        <AccordionItem title="Shipping Information">
          <p>We offer worldwide shipping with the following options:</p>
          <ul className={css({ mt: 2, pl: 4, listStyleType: "disc" })}>
            <li>Standard Shipping (5-7 business days): Free</li>
            <li>Express Shipping (2-3 business days): $15</li>
            <li>Next Day Delivery (where available): $25</li>
          </ul>
          <p className={css({ mt: 2 })}>
            All orders are processed within 24 hours and shipped from our
            nearest distribution center.
          </p>
        </AccordionItem>

        <AccordionItem title="Returns & Exchanges">
          <p>
            We want you to be completely satisfied with your purchase. Our
            return policy includes:
          </p>
          <ul className={css({ mt: 2, pl: 4, listStyleType: "disc" })}>
            <li>60-day return window for unworn items</li>
            <li>Free returns with prepaid shipping label</li>
            <li>Option to exchange for a different size or color</li>
          </ul>
          <p className={css({ mt: 2 })}>
            Items must be returned in original packaging with all tags attached.
          </p>
        </AccordionItem>

        <AccordionItem title="Size & Fit Guide">
          <p>Our shoes typically run true to size. For the best fit:</p>
          <ul className={css({ mt: 2, pl: 4, listStyleType: "disc" })}>
            <li>
              Measure your feet in the afternoon (feet expand during the day)
            </li>
            <li>Consider going up half a size if you have wide feet</li>
            <li>Refer to our detailed size chart for measurements</li>
          </ul>
          <p className={css({ mt: 2 })}>
            If you're between sizes, we recommend going up half a size for
            optimal comfort.
          </p>
        </AccordionItem>

        <AccordionItem title="Care Instructions">
          <p>To keep your sneakers looking fresh:</p>
          <ul className={css({ mt: 2, pl: 4, listStyleType: "disc" })}>
            <li>Clean with a soft brush or cloth</li>
            <li>Use specialized sneaker cleaning products</li>
            <li>Air dry at room temperature</li>
            <li>Store in a cool, dry place away from direct sunlight</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="Warranty Information">
          <p>All our sneakers come with a 1-year warranty covering:</p>
          <ul className={css({ mt: 2, pl: 4, listStyleType: "disc" })}>
            <li>Manufacturing defects</li>
            <li>Material defects</li>
            <li>Structural issues</li>
          </ul>
          <p className={css({ mt: 2 })}>
            Normal wear and tear is not covered under warranty.
          </p>
        </AccordionItem>
      </div>
    </div>
  );
}
