import { ChevronRight, ChevronsLeft, ChevronsRight, Search } from "lucide-react";
import { AttendeeTableRow } from "./attendee-table-row";
import { Checkbox } from "./checkbox";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <section className="w-72 px-3 py-1.5 border border-white/10 bg-transparent rounded-lg flex items-center gap-3">
          <Search size={16} className="text-emerald-300" />
          <input className="bg-transparent h-auto border-0 p-0 text-sm flex-1 outline-none focus:ring-transparent" type="search" placeholder="Buscar participante..." />
        </section>
      </div>

      <div className="border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="w-16 py-3 px-4 text-sm font-semibold text-left">
                <Checkbox />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Código</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Participante</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Data de inscrição</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Data do check-in</th>
              <th className="w-16 py-3 px-4 text-sm font-semibold text-left"></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, i) => (
              <AttendeeTableRow key={i} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-3 px-4 text-sm text-left" colSpan={3}>Mostrando 10 de 208 participantes</td>
              <td className="py-3 px-4 text-sm" colSpan={3}>
                <div className="flex gap-8 items-center justify-end">
                  <span>Página 1 de 11</span>
                  <div className="flex gap-1.5">
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsLeft size={16} />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsLeft size={16} />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronRight size={16} />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsRight size={16} />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
