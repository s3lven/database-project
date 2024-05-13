import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import axios from '../axios'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async ({ email, name, password }) => {
        setIsLoading(true)
        setError(null)

        await axios.post('api/user/signup', {
            email: email, 
            name: name,
            password: password
        })
        .then((res) => {
            console.log(res)
            // Save the user to local storage -- JWT and email
            localStorage.setItem('user', JSON.stringify(res))

            // Update AuthContext
            dispatch({type: 'LOGIN', payload: res})
            setIsLoading(false)
        })
        .catch((error) => {
            setIsLoading(false)
            setError(error.response.data.error)
            console.log(error.response.data.error)
        })

    }

    return { signup, isLoading, error }
}