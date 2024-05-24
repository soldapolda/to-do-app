function FilterByDone({ children, handleChange }) {
    return (
        <select
            onChange={(e) => handleChange(e.target.value)}
            className="form-select mt-4"
        >
            {children}
        </select>
    )
}

export default FilterByDone
