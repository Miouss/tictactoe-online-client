import styled from "@emotion/styled";

export const ConditionnalSubMenu = styled("div", {
  shouldForwardProp: (prop) => prop !== "displayType",
})(({ displayType }: { displayType: "block" | "none" }) => ({
  display: displayType,
}));
