import styled from "styled-components";

export const AppContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflowY: "auto",
  alignItems: "center",
  padding: 12,
  gap: 8,
}));

export const DropdownsContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 32,
  width: "100%",
  padding: 32,
  gap: 16,
}));
