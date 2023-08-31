import { styled } from "styled-components";

export const TableContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  borderRadius: 4,
  "& > div:first-child": {
    borderTop: 0,
  },
}));
