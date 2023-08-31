import React, { ReactNode } from "react";
import { TableContainer } from "./Table.styles";

export const Table: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <TableContainer>{children}</TableContainer>;
};
