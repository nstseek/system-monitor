import React from "react";
import { Table } from "../Table/Table";
import { useSystemContext } from "../../context/useSystemContext";
import { TableRow } from "../Table/components/TableRow/TableRow";
import { TableCell } from "../Table/components/TableCell/TableCell";
import { parseModulesInfo } from "./Modules.model";

export const Modules: React.FC = () => {
  const { data } = useSystemContext();

  const modulesData = data ? parseModulesInfo(data?.modules) : [];

  return (
    <Table>
      {modulesData.map((row) => (
        <TableRow>
          <TableCell>{row}</TableCell>
        </TableRow>
      ))}
    </Table>
  );
};
