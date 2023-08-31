import React, { ReactNode } from "react";
import { TableCellContainer } from "./TableCell.styles";

export const TableCell: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <TableCellContainer>{children}</TableCellContainer>;
};
