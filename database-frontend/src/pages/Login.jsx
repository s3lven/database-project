import { useState } from 'react'

//TODO: Redo form with React-Hook-Form.


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
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

            <button className="bg-primary border-none text-white p-3 rounded cursor-pointer">Log In</button>
        </form>
    )
}

export default Login