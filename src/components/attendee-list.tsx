import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search } from "lucide-react";
import { TableRow } from "./table/table-row";
import { Checkbox } from "./checkbox";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { useEffect, useState } from "react";
import axios from "axios";

interface Attendee {
  id: number
  name: string
  email: string
  createdAt: Date
  checkedInAt: Date | null
}

export function AttendeeList() {
  const [searchValue, setSearchValue] = useState(() => {
    const url = new URL(window.location.toString())
    if (url.searchParams.get('search')) {
      return url.searchParams.get('search') ?? ''
    } else {
      return ''
    }
  })
  const [attendees, setAttendees] = useState<Attendee[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(() => {
    const url = new URL(window.location.toString())
    if (url.searchParams.get('page')) {
      return Number(url.searchParams.get('page'))
    } else {
      return 1
    }
  })

  const totalPages = Math.ceil(total / 10)

  useEffect(() => {
    const url = new URL(window.location.toString())
    axios.get('http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees', {
      params: {
        pageIndex: page - 1,
        query: searchValue
      }
    })
      .then(response => {
        setAttendees(response.data.attendees)
        setTotal(response.data.total)
      })

    if (url.searchParams.get('page') === '1') {
      url.searchParams.delete('page')
    }

  }, [page, searchValue])

  function setCurrentPage(page: number) {
    const url = new URL(window.location.toString())

    url.searchParams.set('page', String(page))
    window.history.pushState({}, "", url)
    setPage(page)
  }

  function setCurrentSearch(search: string) {
    const url = new URL(window.location.toString())

    url.searchParams.set('search', search)
    window.history.pushState({}, "", url)
    setSearchValue(search)
  }

  function goToNextPage() {
    setCurrentPage(page + 1)
  }

  function goToPreviousPage() {
    setCurrentPage(page - 1)
  }

  function goToLastPage() {
    setCurrentPage(totalPages)
  }

  function goToFirstPage() {
    setCurrentPage(1)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <section className="w-72 px-3 py-1.5 border border-white/10 bg-transparent rounded-lg flex items-center gap-3">
          <Search size={16} className="text-emerald-300" />
          <input value={searchValue} onChange={(e) => {
            setPage(1)
            setSearchValue(e.target.value)
            setCurrentSearch(e.target.value)
          }} className="bg-transparent h-auto border-0 p-0 text-sm flex-1 outline-none focus:ring-transparent" type="search" placeholder="Buscar participante..." />
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
          {attendees.map((attendee) => (
            <TableRow attendee={attendee} key={attendee.id} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>Mostrando {attendees.length} de {total} participantes</TableCell>
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
