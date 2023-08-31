import React from "react";
import { Table } from "../Table/Table";
import { useSystemContext } from "../../context/useSystemContext";
import { TableRow } from "../Table/components/TableRow/TableRow";
import { TableCell } from "../Table/components/TableCell/TableCell";

export const Date: React.FC = () => {
  const { data } = useSystemContext();

  return (
    <Table>
      <TableRow>
        <TableCell>{data?.date}</TableCell>
      </TableRow>
    </Table>
  );
};
