import styled from "@emotion/styled";

export const ConditionnalSubMenu = styled("div")(
  ({ displayType }: { displayType: "block" | "none" }) => ({
    display: displayType,
  })
);
