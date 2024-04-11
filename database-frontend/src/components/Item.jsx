import { useState } from 'react'

function Item({data, deleteItem}) {
    const [display, setDisplay] = useState(true)

    const handleOnClick = () => {
        setDisplay(!display)
    }

    return (
        <>
            <div onClick={handleOnClick} className="bg-white rounded my-20 mx-auto p-20 relative shadow=[2px_2px_5px_rgba(0,0,0,0.05)]"> 
                {display ? 
                    <>
                        <p className="mx-0 mt-0 mb-2.5 text-xl text-primary semi-bold">{data.name}</p>
                        <p className="item_details">Category: {data.category}</p>
                        <p className="item_details">Items Available: {data.numberAvailable}</p>

                    </>:
                    <>
                        <div>
                            <p>Name: {data.name}</p>
                        </div>
                        <div>Description
                            <p>{data.description}</p>
                            <p>{data.category}</p>
                        </div>
                        {/* Delete Button */}
                        <span onClick={deleteItem}
                            className="absolute top-5 right-5 p-1.5 rounded-lg cursor-pointer
                                bg-slate-50 text-zinc-800">
                        X
                        </span>
                    </>
                }
            </div>
        </>
    )
}

export default Item