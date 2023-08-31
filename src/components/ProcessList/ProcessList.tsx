import React from "react";
import { Table } from "../Table/Table";
import { useSystemContext } from "../../context/useSystemContext";
import { TableRow } from "../Table/components/TableRow/TableRow";
import { TableCell } from "../Table/components/TableCell/TableCell";
import { parseProcessList } from "./ProcessList.model";

export const ProcessList: React.FC = () => {
  const { data } = useSystemContext();

  const processList = data ? parseProcessList(data?.lsproc) : [];

  return (
    <Table>
      {processList.map((row) => (
        <TableRow>
          <TableCell>PID</TableCell>
          <TableCell>{row}</TableCell>
        </TableRow>
      ))}
    </Table>
  );
};
