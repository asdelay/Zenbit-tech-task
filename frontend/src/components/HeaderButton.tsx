import React, {FC, ReactNode} from 'react'
interface HeaderButtonProps {
    children: string | ReactNode;
    className?: string;
    onClick?: () => void;
}

export const HeaderButton: FC<HeaderButtonProps> = ({children, className, onClick}) => {
return (
    <button onClick={onClick} className={`py-[11px] leading-[22px] text-[20px] font-bold w-[128px] sm:w-[160px] h-[44px] rounded-[5px] ${className}`}>{children}</button>
)
}