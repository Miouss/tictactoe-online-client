import styled from "@emotion/styled";

export const ConditionnalSubMenu = styled("div", {
  shouldForwardProp: (prop) => prop !== "display",
})(({ displayed }: { displayed: boolean }) => ({
  display: displayed ? "block" : "none",
}));
