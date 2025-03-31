import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const Appliedjobtable = () => {
  return (
    <div>
      <div>Here is you applied job with their status</div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Job</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4, 5].map((items, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">17/03/2025{items} </TableCell>
              <TableCell>Frontend Developer {items} </TableCell>
              <TableCell>Google {items} </TableCell>
              <TableCell className="text-right">
                <Badge variant="outline">Selected</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Appliedjobtable;
