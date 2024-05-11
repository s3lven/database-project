import { IoClose } from "react-icons/io5";
import { useForm, Controller } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import _ from 'lodash'
import axios from '../../axios'


import Select from "../Select";
import { locationOptions, requirementOptions } from './options'

import { useItemsContext } from '../../hooks/useItemsContext'


function AddItemModal({ onClose }) {
    // React Hook Form 
    const form = useForm()
    const { register, control, handleSubmit, formState } = form
    const { errors } = formState

    const {dispatch} = useItemsContext()

    // Add item into DB and update global state
    const onSubmit = async (data) => {
        await axios.post('/api/items', {
            name: data.name,
            category: data.category,
            description: data.description,
            recommendedUses: data.recommendedUses,
            specialRequirements: data.specialRequirements,
            numberAvailable: data.numberAvailable,
            productURL: data.productURL,
            location: data.location,
        })
        .then((res) => {
            console.log('Form submitted', res.data)
            dispatch({type: "CREATE_ITEM", payload: res.data})
            onClose()
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    return (
        // Modal Background
        <div className="fixed w-full h-full top-0 left-0 backdrop-blur-sm no-doc-scroll
            flex justify-center items-center bg-black/50 z-[100]"
            >
            {/* Modal Container */}
            <div className='rounded-xl border-black shadow-lg bg-white w-4/5
                flex flex-col p-7'>
                {/* Close Button */}
                <div className="flex justify-end">
                    <button
                        className="bg-transparent border-0 text-2xl cursor-pointer text-black hover:text-gray-900"
                        onClick={onClose}>
                            <IoClose />
                    </button>
                </div>
                {/* Modal Content */}
                {/* Title */}
                <div className="inline-block text-center mt-2.5">
                    <h1 className="text-xl font-semibold">Add a new Item</h1>
                </div>
                {/* Body */}
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <label htmlFor="name">Item Name</label>
                        <input 
                            type="text"
                            name="name"
                            {...register("name", {required: 'Item name is required'})}
                            className={`${_.has(errors, 'name') ? 'input_error' : '' } add-item`}
                            />
                        <label htmlFor="category">Category</label>
                        <input 
                            type="text"
                            name="category"
                            {...register("category", {required: "Category is required"})}
                            className={`${_.has(errors, 'category') ? 'input_error' : '' } add-item`}
                            />
                        <label htmlFor="numberAvailable">Number Available</label>
                        <input 
                            type="number"
                            name="numberAvailable"
                            {...register("numberAvailable", {required: "Number of items available is required"})}
                            className={`${_.has(errors, 'numberAvailable') ? 'input_error' : '' } add-item`}
                            />
                        <label htmlFor="description">Description</label>
                        <input 
                            type="text"
                            name="description"
                            {...register("description")}
                            className={`add-item`}
                            />
                        <label htmlFor="recommendedUses">Recommended Uses (if any)</label>
                        <input 
                            type="text"
                            name="recommendedUses"
                            {...register("recommendedUses")}
                            className={`add-item`}
                            />
                        <label htmlFor="productURL">Product URL (if available)</label>
                        <input 
                            type="text"
                            name="productURL"
                            {...register("productURL")}
                            className={`add-item`}
                            />
                        <div className="display flex gap-5">
                            <div className='basis-1/2'>
                                <label>Location</label>
                                <Controller 
                                    name="location"
                                    control={control}
                                    rules={{required: "Location of item is required"}}
                                    render={({ field }) => {
                                        return <Select 
                                            multiple
                                            value={field.value ?? []}
                                            onChange={field.onChange}
                                            options={locationOptions}
                                            containerName={field.name}
                                            errors={errors}
                                        />
                                    }}
                                />
                            </div>
                            <div className='basis-1/2'>
                                <label>Special Requirements</label>
                                <Controller 
                                    name="specialRequirements"
                                    control={control}
                                    render={({ field }) => {
                                        return <Select 
                                            multiple
                                            value={field.value ?? []}
                                            onChange={field.onChange}
                                            options={requirementOptions}
                                            containerName={field.name}
                                        />
                                    }}
                                />
                            </div>
                        </div>
                        {!(_.isEmpty(errors)) && <div className="p-2.5 bg-[#ffefef] border border-solid border-error text-error rounded mt-16 mx-0">Please fill in all of the required fields.</div>}
                        <div className='flex justify-end my-5'>
                            <button className="bg-red-500 px-10 py-3.5 rounded-full text-white drop-shadow-md font-semibold">Done</button>
                        </div>
                        </form>
                        <DevTool control={control}/>
                </div>
            </div>
        </div>
    )
}

export default AddItemModal