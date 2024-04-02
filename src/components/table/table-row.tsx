import { MoreHorizontal } from "lucide-react";
import { Checkbox } from "../checkbox";
import { IconButton } from "../icon-button";
import { TableCell } from "./table-cell";
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from "date-fns/locale";

interface TableRowProps {
  attendee: {
    id: number
    name: string
    email: string
    createdAt: Date
    checkedInAt: Date
  }
}

export function TableRow({ attendee }: TableRowProps) {
  return (
    <tr className="border-b border-white/10 hover:bg-white/5">
      <TableCell>
        <Checkbox />
      </TableCell>
      <TableCell>{attendee.id}</TableCell>
      <TableCell>
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-white">{attendee.name}</span>
          <span>{attendee.email}</span>
        </div>
      </TableCell>
      <TableCell>
        {formatDistanceToNow(attendee.createdAt, {
          locale: ptBR,
          addSuffix: true
        })}
      </TableCell>
      <TableCell>
        {formatDistanceToNow(attendee.checkedInAt, {
          locale: ptBR,
          addSuffix: true
        })}
      </TableCell>
      <TableCell>
        <IconButton transparent >
          <MoreHorizontal size={16} />
        </IconButton>
      </TableCell>
    </tr>
  )
}
