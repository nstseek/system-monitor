import styled from "styled-components";

export const DropdownHeader = styled.div(() => ({
  display: "flex",
  padding: "12px 24px",
  justifyContent: "space-between",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  transition: "all 0.2s",
  cursor: "pointer",
  userSelect: "none",
  borderRadius: 8,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
}));

export const DropdownContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  borderRadius: 8,
  width: "100%",
}));

export const DropdownContent = styled.div(() => ({
  display: "flex",
  padding: 8,
}));
