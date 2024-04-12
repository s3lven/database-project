import { useState } from 'react'

function Item({data, deleteItem}) {
    const [display, setDisplay] = useState(false)

    const handleOnClick = () => {
        setDisplay(!display)
    }

    return (
        <>
            <div onClick={handleOnClick} className="bg-white rounded my-5 mx-auto p-5 relative shadow=[2px_2px_5px_rgba(0,0,0,0.05)]">  
                <>
                    <p className="mx-0 mt-0 mb-2.5 text-xl text-primary font-bold">{data.name}</p>
                    <p className="item_details"><strong>Description:</strong> {data.description}</p>
                    <p className="item_details"><strong>Category:</strong> {data.category}</p>
                    <p className="item_details"><strong>Items Available:</strong> {data.numberAvailable}</p>
                    
                    {display && 
                    <>
                        <hr className=" my-3"></hr> 
                        {/* Delete Button */}
                        <span onClick={deleteItem}
                        className="absolute top-5 right-5 p-1.5 rounded-lg cursor-pointer
                            bg-[#f1f1f1] text-zinc-800">
                        Delete
                        </span>
                        {data.productURL ? (
                            <p className="item_details"><strong>Product URL: &ensp;</strong>
                                <a href={data.productURL}
                                    className="underline">Click Here</a>
                            </p>) : 
                            ''
                        }                        
                        {data.recommendedUses ? (
                            <p className="item_details"><strong>Recommended Uses: &ensp;</strong>
                                {data.recommendedUses}
                            </p>) : 
                            ''
                        }


                        {/* <p className="item_details"><strong>Special Requirements:</strong> {data.specialRequirements}</p>
                        <p className="item_details"><strong>Locations:</strong> {data.location}</p> */}
                    </>
                    }
                </>
            </div>
        </>
    )
}

export default Item