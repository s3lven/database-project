import { useState } from 'react'

function Post(props) {
    const [display, setDisplay] = useState(true)

    const handleOnClick = () => {
        setDisplay(!display)
    }

    return (
        <button type="button" key={props.id} onClick={handleOnClick} className="item"> 
            {display ? 
                <>
                    <p className="">Name: {props.data.name}</p>
                    <h1 className="">Company: {props.data.company.name}</h1> 
                </>:
                <>
                    <div className="">
                        <p className="">Name: {props.data.name}</p>
                        <h1 className="">Company: {props.data.company.name}</h1>
                    </div>
                    <div>Contact Information
                        <p>Phone: {props.data.phone}</p>
                        <p>Email: {props.data.email}</p>
                    </div>
                </>
            }
        </button>
        
    )
}

export default Post