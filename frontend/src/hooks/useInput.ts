import { useEffect, useId, useState } from "react"
import { useAppDispatch } from "../redux/hooks.ts"
import { updateEmail, updatePassword } from "../redux/features/users/userSlice.ts"

export const useInput = <T extends string>(inputType: T) => {
    const dispatch = useAppDispatch()
    const id = useId()
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {        
        setInputValue(e.target.value)
    }

    useEffect(()=>{
        dispatch(inputType === 'email' ? updateEmail(inputValue): updatePassword(inputValue))
    }, [dispatch, inputType, inputValue])

    return {id, inputValue, onInputChange}
}