import { ComponentProps, ReactNode } from "react"

interface NavLinkProps extends ComponentProps<'a'> {
  active?: boolean
  children: ReactNode
}

export function NavLink({ active, ...props }: NavLinkProps) {
  return (
    <>
      <a {...props} className={`font-medium text-md ${active ? '' : 'text-zinc-300'}`} >
        {props.children}
      </a>
    </>
  )
}
