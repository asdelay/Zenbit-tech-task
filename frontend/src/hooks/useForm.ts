import { useAppSelector, useAppDispatch } from '../redux/hooks.ts'
import { useNavigate } from 'react-router-dom'

import { logIn } from '../redux/features/users/userSlice.ts'
import axios from 'axios'

export const useForm = <T extends string>(formType: T) => {
    const {loginEmail, loginPassword} = useAppSelector(state => state.users.loginInputData)
    
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onClickHandler = async (e) => {
        e.preventDefault();
        try{
            const result = (await (axios.post(`http://127.0.0.1:7001/auth/${formType}`,{email: loginEmail, password: loginPassword}))).data
            result.token && dispatch(logIn())
            navigate('/')
        } catch (e) {
            alert(`Error! ${Array.isArray(e.response.data) ? e.response.data : ''}`)
        }

    }
    return onClickHandler
}



