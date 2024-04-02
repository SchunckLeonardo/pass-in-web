import { MoreHorizontal } from "lucide-react";
import { Checkbox } from "./checkbox";

export function AttendeeTableRow() {
  return (
    <tr className="border-b border-white/10 hover:bg-white/5">
      <td className="py-3 px-4 text-sm text-zinc-300">
        <Checkbox />
      </td>
      <td className="py-3 px-4 text-sm text-zinc-300">1243125</td>
      <td className="py-3 px-4 text-sm text-zinc-300">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-white">Leonardo Schunck Rainha</span>
          <span>leo@gmail.com</span>
        </div>
      </td>
      <td className="py-3 px-4 text-sm text-zinc-300">7 dias atrás</td>
      <td className="py-3 px-4 text-sm text-zinc-300">3 dias atrás</td>
      <td className="py-3 px-4 text-sm text-zinc-300">
        <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
          <MoreHorizontal size={16} />
        </button>
      </td>
    </tr>
  )
}
