import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<'th'> {
  lower?: boolean
}

export function TableHeader({ lower, ...props }: TableHeaderProps) {
  return <th className={`${lower ? 'w-16' : '' } py-3 px-4 text-sm font-semibold text-left`} {...props} />
}
