import { styled } from "styled-components";

export const TableRowContainer = styled.div(() => ({
  display: "flex",
  borderTop: "1px solid #777",
  "& > div:first-child": {
    flex: 1,
    justifyContent: "flex-end",
  },
  "& > div:only-of-type": {
    justifyContent: "flex-start",
  },
  "& > div:nth-child(2)": {
    flex: 2,
    borderLeft: "1px solid #777",
  },
}));
