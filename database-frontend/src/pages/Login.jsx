import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

//TODO: Redo form with React-Hook-Form.


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, isLoading, error} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <form className="max-w-[400px] my-10 mx-auto p-5 bg-white rounded"
            onSubmit={handleSubmit}>
            <h1 className='font-bold text-xl my-5'>Log In</h1>

            <label>Email:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className='p-2.5 mt-2.5 mb-5 w-full border-[1px] rounded box-border'
            />

            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className='p-2.5 mt-2.5 mb-5 w-full border-[1px] rounded box-border'
            />

            <button disabled={isLoading} className="bg-primary border-none text-white p-3 rounded cursor-pointer">Log In</button>
            {error && <div className='p-2.5 bg-[#ffefef] border border-solid border-error text-error rounded my-5 mx-0'>{error}</div>}

        </form>
    )
}

export default Login