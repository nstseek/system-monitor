import React from "react";
import { Table } from "../Table/Table";
import { useSystemContext } from "../../context/useSystemContext";
import { TableRow } from "../Table/components/TableRow/TableRow";
import { TableCell } from "../Table/components/TableCell/TableCell";
import { parseCpuInfo } from "./CPUInfo.model";

export const CPUInfo: React.FC = () => {
  const { data } = useSystemContext();

  const cpuData = data ? parseCpuInfo(data?.cpuinfo) : [];

  return (
    <Table>
      {cpuData.map((row) => (
        <TableRow>
          {row.map((value) => (
            <TableCell>{value}</TableCell>
          ))}
        </TableRow>
      ))}
    </Table>
  );
};
