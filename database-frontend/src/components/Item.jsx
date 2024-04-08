import { useState } from 'react'

function Item({data}) {
    const [display, setDisplay] = useState(true)

    const handleOnClick = () => {
        setDisplay(!display)
    }

    return (
        <>
            <div onClick={handleOnClick} className="item"> 
                {display ? 
                    <>
                        <p>Name: {data.name}</p>
                    </>:
                    <>
                        <div>
                            <p>Name: {data.name}</p>
                        </div>
                        <div>Description
                            <p>{data.description}</p>
                            <p>{data.category}</p>
                        </div>
                        {/* Close Button */}
                        <button type="button">
                        X
                        </button>
                    </>
                }
            </div>
        </>
    )
}

export default Item