import Database from "../components/Database"
import Footer from "../components/Footer"

const Home = () => {
    return(
        <>
            <div className="lg:grid grid-cols-[3fr_1fr] gap-28
                    sm:flex sm:flex-col-reverse sm:self-stretch sm:gap-5 lg:gap-10">
                <Database />
            </div>
            <Footer />
        </>
        
    )
}
export default Home