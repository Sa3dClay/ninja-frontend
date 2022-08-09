import { useState } from "react";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";

const WorkoutForm = () => {
    const [error, setError] = useState(null);
    const [title, setTitle] = useState("");
    const [reps, setReps] = useState("");
    const [load, setLoad] = useState("");
    const [emptyFields, setEmptyFields] = useState([]);

    const { dispatch } = useWorkoutsContext();

    const resetForm = () => {
        setTitle("");
        setReps("");
        setLoad("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = { title, reps, load };

        const response = await fetch("/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        } else {
            setError(null);
            setEmptyFields([]);

            dispatch({
                type: "CREATE_WORKOUT",
                payload: json,
            });

            resetForm();
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add new workout</h3>

            {error && <div className="error">{error}</div>}

            <label>Exercise:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields && emptyFields.includes("title") ? 'error' : ''}
            />

            <label>Repeats:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                min="0"
                max="100"
                className={emptyFields && emptyFields.includes("reps") ? 'error' : ''}
            />

            <label>Load (in Kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                min="0"
                max="100"
                className={emptyFields && emptyFields.includes("load") ? 'error' : ''}
            />

            <button>Add Workout</button>
        </form>
    );
};

export default WorkoutForm;
