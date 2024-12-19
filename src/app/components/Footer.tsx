"use client";

import { css } from "../../../styled-system/css";
import { Button } from "react-aria-components";
import { FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const FOOTER_LINKS = {
  Shop: [
    "New Releases",
    "Best Sellers",
    "Court Classics",
    "Street Style",
    "Limited Editions",
  ],
  Support: ["Shipping", "Returns", "Size Guide", "Track Order", "Contact Us"],
  Community: ["Ballers Club", "Events", "Blog", "Stories", "Athletes"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer
      className={css({
        bg: "zinc.950",
        color: "white",
        pt: 20,
        pb: 8,
      })}
    >
      <div
        className={css({
          maxW: "1200px",
          mx: "auto",
          px: 4,
        })}
      >
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: {
              base: "1fr",
              md: "1fr 4fr",
              lg: "1fr 5fr 2fr",
            },
            gap: { base: 12, lg: 24 },
            pb: 16,
            borderBottom: "1px solid",
            borderColor: "zinc.800",
          })}
        >
          {/* Brand Section */}
          <div>
            <img
              src="/jumpman.png"
              alt="KoolKicks Logo"
              className={css({
                height: "3rem",
                width: "3rem",
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
              })}
            />
          </div>

          {/* Links Section */}
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: {
                base: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: { base: 8, lg: 12 },
            })}
          >
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <h3
                  className={css({
                    fontSize: "sm",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "wider",
                    mb: 4,
                  })}
                >
                  {category}
                </h3>
                <ul
                  className={css({
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  })}
                >
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className={css({
                          color: "zinc.400",
                          fontSize: "sm",
                          _hover: { color: "white" },
                        })}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: 4,
            })}
          >
            <h3
              className={css({
                fontSize: "sm",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "wider",
              })}
            >
              Join the Squad
            </h3>
            <p className={css({ color: "zinc.400", fontSize: "sm" })}>
              Stay in the loop with exclusive drops, player stories, and
              court-side news.
            </p>
            <form
              className={css({
                display: "flex",
                gap: 2,
                mt: 2,
              })}
            >
              <input
                type="email"
                placeholder="Your email"
                className={css({
                  flex: 1,
                  bg: "zinc.900",
                  border: "1px solid",
                  borderColor: "zinc.800",
                  rounded: "md",
                  px: 4,
                  py: 2,
                  color: "white",
                  _placeholder: { color: "zinc.500" },
                  _focus: {
                    outline: "none",
                    borderColor: "zinc.600",
                  },
                })}
              />
              <Button
                className={css({
                  bg: "white",
                  color: "black",
                  px: 4,
                  py: 2,
                  rounded: "md",
                  fontWeight: "medium",
                  _hover: { bg: "zinc.200" },
                })}
              >
                Join
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={css({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: 8,
            color: "zinc.500",
            fontSize: "sm",
          })}
        >
          <p>© 2024 KoolKicks. All court, no cap.</p>
          <div
            className={css({ display: "flex", gap: 6, alignItems: "center" })}
          >
            <a
              href="#"
              className={css({
                _hover: { color: "white" },
                display: "flex",
                alignItems: "center",
                fontSize: "xl",
              })}
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className={css({
                _hover: { color: "white" },
                display: "flex",
                alignItems: "center",
                fontSize: "xl",
              })}
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className={css({
                _hover: { color: "white" },
                display: "flex",
                alignItems: "center",
                fontSize: "xl",
              })}
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
