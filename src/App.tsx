import { AttendeeList } from "./components/attendee-list";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="bg-zinc-950 w-full mx-auto h-full flex items-center justify-center text-zinc-50 antialiased">
      <div className="flex flex-col gap-5 px-8 py-5 w-[1216px]">
        <Header />
        <AttendeeList />
      </div>
    </div>
  )
}
