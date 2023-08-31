import React, { ReactNode } from "react";
import { TableRowContainer } from "./TableRow.styles";

export const TableRow: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <TableRowContainer>{children}</TableRowContainer>;
};
