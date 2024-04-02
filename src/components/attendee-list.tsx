import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search } from "lucide-react";
import { TableRow } from "./table/table-row";
import { Checkbox } from "./checkbox";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { useState } from "react";
import { attendees } from "../data/attendees";

export function AttendeeList() {
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(attendees.length / 10)

  function goToNextPage() {
    setPage(page + 1)
  }

  function goToPreviousPage() {
    setPage(page - 1)
  }

  function goToLastPage() {
    setPage(totalPages)
  }

  function goToFirstPage() {
    setPage(1)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <section className="w-72 px-3 py-1.5 border border-white/10 bg-transparent rounded-lg flex items-center gap-3">
          <Search size={16} className="text-emerald-300" />
          <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="bg-transparent h-auto border-0 p-0 text-sm flex-1 outline-none focus:ring-transparent" type="search" placeholder="Buscar participante..." />
        </section>
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader lower>
              <Checkbox />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader lower></TableHeader>
          </tr>
        </thead>
        <tbody>
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => (
            <TableRow attendee={attendee} key={attendee.id} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>Mostrando 10 de {attendees.length} participantes</TableCell>
            <TableCell colSpan={3}>
              <div className="flex gap-8 items-center justify-end">
                <span>Página {page} de {totalPages}</span>
                <div className="flex gap-1.5">
                  <IconButton disabled={page <= 1} onClick={goToFirstPage}>
                    <ChevronsLeft size={16} />
                  </IconButton>
                  <IconButton disabled={page <= 1}>
                    <ChevronLeft onClick={goToPreviousPage} size={16} />
                  </IconButton>
                  <IconButton disabled={page >= totalPages} onClick={goToNextPage}>
                    <ChevronRight size={16} />
                  </IconButton>
                  <IconButton disabled={page >= totalPages} onClick={goToLastPage}>
                    <ChevronsRight size={16} />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}
