import React from "react";
import { Table } from "../Table/Table";
import { useSystemContext } from "../../context/useSystemContext";
import { TableRow } from "../Table/components/TableRow/TableRow";
import { TableCell } from "../Table/components/TableCell/TableCell";
import { parseMemInfo } from "./MemInfo.model";

export const MemInfo: React.FC = () => {
  const { data } = useSystemContext();

  const memData = data ? parseMemInfo(data?.meminfo) : [];

  return (
    <Table>
      {memData.map((row) => (
        <TableRow>
          {row.map((value) => (
            <TableCell>{value}</TableCell>
          ))}
        </TableRow>
      ))}
    </Table>
  );
};
