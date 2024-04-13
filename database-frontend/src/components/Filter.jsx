import { locationOptions, requirementOptions } from "./Modal/options"
import Select from "./Select"
import { useState } from 'react'

function Filter() {
    const [filterDisplay, setFilterDisplay] = useState([])

    console.log("filterParam is: ", filterDisplay)

    const handleFilterChange = (o) => {
        console.log(o)
        console.log(o.includes({label: "CHT", value: 2}))

        setFilterDisplay((prevParamData) => ({
        ...prevParamData,
        locationFilter: o
    }))
    }

    

    return (
        <div className='bg-white rounded p-5 flex flex-col'>
            {/* Title */}
            <div className="inline-block text-center mt-2.5">
                <p className="text-xl font-semibold">Filter</p>
            </div>
            {/* Body */}
            <div>
                <label>Location</label>
                <Select 
                    multiple
                    options={locationOptions}
                    value={filterDisplay.locationFilter ?? []}
                    onChange={o => {handleFilterChange(o)}}
                />
                {/* <label>Special Requirements</label>
                <Select 
                    multiple
                    options={requirementOptions}
                    value={filterParam.specialRequirementFilter ?? []}
                    onChange={o => {setFilterParam((prevParamData) => ({
                                    ...prevParamData,
                                    specialRequirementFilter: o
                                }))}}
                /> */}
                
            </div>
        </div>
    )
}

export default Filter