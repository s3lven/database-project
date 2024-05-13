import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <header className="bg-white"> 
            <div className="w-auto mx-auto my-0 py-10 px-20 flex items-center justify-between
                ">
                <Link to="/" className="text-zinc-800 no-underline">
                    <h1>UCD Health | Center for Simulation and Education Enhancement</h1>
                    <h1>Equipment and Simulator Catalog</h1>
                </Link>
                <nav className='flex items-center gap-2.5'>
                    {user ? 
                    <div className=' flex flex-row items-center gap-2.5'>
                        <span>Hello {user.data.email}!</span>
                        <button onClick={handleClick}
                            className="bg-white text-primary border-2 border-solid border-primary
                                py-1.5 px-2.5 rounded cursor-pointer text-[1em]">Log out</button>
                    </div>
                    :
                    <div className="border rounded border-solid bg-primary text-white px-5 py-2.5">
                        <Link to='/login'>Log In</Link>
                    </div>
                    }
                </nav>
            </div>
        </header>
    )
}

export default Navbar