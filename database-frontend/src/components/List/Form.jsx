
function Form({ input, setInput, addItem}) {
    return (
        <>
            <div className="text-white flex flex-col items-center py-10">
                <div className="flex gap-5 mt-3">
                <input
                    type="text"
                    placeholder="Search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="text-black flex flex-row text-center rounded-md h-10"
                />
                <button
                    type="submit"
                    className="bg-red-500 px-3 rounded-md h-10"
                    onClick={(e) => addItem(e)}
                >Add</button>
                </div>
            </div>
        </>
    )
}

export default Form