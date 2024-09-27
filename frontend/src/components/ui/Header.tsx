import React, {FC, ReactNode} from 'react'

interface Props {
    children?: ReactNode
}

export const Header: FC<Props> = ({children}) => {
return (
    <header className="bg-dark-blue h-[80px] flex items-center justify-end gap-[10px]">{children}</header>
)
}