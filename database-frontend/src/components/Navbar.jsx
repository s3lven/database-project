import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header className="bg-white"> 
            <div className="w-auto mx-auto my-0 py-10 px-20 flex items-center justify-between
                ">
                <Link to="/" className="text-zinc-800 no-underline">
                    <h1>UCD Health | Center for Simulation and Education Enhancement</h1>
                    <h1>Equipment and Simulator Catalog</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar