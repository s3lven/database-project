import { locationOptions, requirementOptions } from "./Modal/options"
import Select from "./Select"

function Filter({filter, setFilter}) {

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
                    options={locationOptions}
                    value={filter.locationFilter ?? ""}
                    onChange={o => {setFilter((prevFormData) => (
                        {...prevFormData,
                        locationFilter: o}
                    ))}}
                />
                <label className="mt-3">Special Requirements</label>
                <Select 
                    options={requirementOptions}
                    value={filter.requirementFilter ?? ""}
                    onChange={o => {setFilter((prevFormData) => (
                        {...prevFormData,
                        requirementFilter: o}
                    ))}}
                />
            </div>
        </div>
    )
}

export default Filter