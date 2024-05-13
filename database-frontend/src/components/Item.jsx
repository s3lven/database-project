import { useState } from 'react'
import { IconContext } from "react-icons";
import { MdDelete, MdModeEdit  } from "react-icons/md";
import { useModalContext } from '../hooks/useModalContext';
import { useAuthContext } from '../hooks/useAuthContext';

function Item({data, deleteItem}) {
    // Opens the UpdateItemModal
    const {openModal} = useModalContext()
    const {user} = useAuthContext()
    // Local state to display item details
    const [display, setDisplay] = useState(false)

    return (
        <>
            <div onClick={() => setDisplay(!display)}
                className="bg-white rounded my-5 mx-auto p-5 relative shadow=[2px_2px_5px_rgba(0,0,0,0.05)]">  
                <>
                    {/* Main Section that is shown to users on page load */}
                    <p className="mx-0 mt-0 pr-5 mb-2.5 text-xl text-primary font-bold">{data.name}</p>
                    <p className="item_details"><strong>Description:</strong> {data.description}</p>
                    <p className="item_details"><strong>Category:</strong> {data.category}</p>
                    <p className="item_details"><strong>Items Available:</strong> {data.numberAvailable}</p>
                    
                    {display && 
                    <>
                        <hr className=" my-3"></hr> 
                        {/* Delete and Update Buttons */}
                        { user &&
                        <IconContext.Provider value={{size: "1.5em"}}>
                            <span onClick={deleteItem}
                            className="absolute top-5 right-5 p-1.5 rounded-lg cursor-pointer
                                bg-[#f1f1f1] text-zinc-800">
                                <MdDelete />
                            </span>
                            <span onClick={() => openModal("UpdateItemModal", {data})}
                            className="absolute top-16 right-5 p-1.5 rounded-lg cursor-pointer
                                bg-[#f1f1f1] text-zinc-800">
                                <MdModeEdit />
                            </span>
                        </IconContext.Provider>
                        }
                        
                        {/* Rest of the fields */}
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
                        <div className="item_details flex"><strong>Special Requirements: &ensp;</strong> 
                            {data.specialRequirements.map((v) => 
                                (<p key={v.value}>{v.label}&emsp;&emsp;</p>)
                            )}
                        </div>
                        <div className="item_details flex"><strong>Locations: &ensp;</strong>
                            {data.location.map((v) => 
                                (<p key={v.value}>{v.label}&emsp;&emsp;</p>)
                            )}    
                        </div>
                    </>
                    }
                </>
            </div>
        </>
    )
}

export default Item