"use client";

import { css } from "../../../styled-system/css";
import { Button } from "react-aria-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

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
        <div
          className={css({ display: "flex", alignItems: "center", gap: 12 })}
        >
          <Link href="/">
            <img
              src="/jumpman.png"
              alt="KoolKicks Logo"
              className={css({
                height: "2rem",
                width: "2rem",
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
              })}
            />
          </Link>
          <nav className={css({ display: "flex", gap: 8 })}>
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={css({
                  color: pathname === item.href ? "white" : "zinc.400",
                  fontSize: "sm",
                  fontWeight: "medium",
                  _hover: { color: "white" },
                })}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className={css({ display: "flex", alignItems: "center", gap: 4 })}>
          <Button
            className={css({
              color: "zinc.400",
              p: 2,
              borderRadius: "md",
              _hover: { color: "white", bg: "zinc.900" },
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
          </Button>
        </div>
      </div>
    </header>
  );
}
