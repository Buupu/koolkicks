import { css } from "../../styled-system/css";

export const breadcrumbStyles = css({
  "& .react-aria-Breadcrumbs": {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
    margin: 0,
    padding: 0,
    fontSize: "sm",
    color: "white",
  },
  "& .react-aria-Breadcrumb": {
    "&:not(:last-child)": {
      _after: {
        content: "'/'",
        padding: "0 8px",
        color: "zinc.600",
      },
    },
  },
  "& .react-aria-Link": {
    color: "zinc.400",
    outline: "none",
    position: "relative",
    textDecoration: "none",
    cursor: "pointer",
    _hover: {
      color: "white",
    },
    "&[data-current]": {
      color: "white",
      fontWeight: "medium",
    },
    "&[data-focus-visible]": {
      _after: {
        content: "''",
        position: "absolute",
        inset: "-2px -4px",
        borderRadius: "md",
        border: "2px solid",
        borderColor: "white",
      },
    },
  },
});
