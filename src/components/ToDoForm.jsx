import { useForm } from "react-hook-form"

function ToDoForm({ onSubmit }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    const onAddToDo = (data) => {
        onSubmit(data)
        reset()
    }

    return (
        <form className="mt-5" onSubmit={handleSubmit(onAddToDo)}>
            <div className="mb-3">
                <label htmlFor="new-to-do" className="form-label">
                    Add ToDo
                </label>
                <input
                    {...register("title", {
                        required: "new Todo has to have content",
                    })}
                    id="new-to-do"
                    type="text"
                    className="form-control"
                />
                <div className="form-text text-danger">
                    {errors.title?.message}
                </div>
            </div>
            <button type="submit" className="btn btn-success">
                Add to list
            </button>
        </form>
    )
}

export default ToDoForm
