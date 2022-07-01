import { uesWorkoutsContext } from "../../hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Workout = ({ workout }) => {
    const { dispatch } = uesWorkoutsContext();

    const handleDelete = async () => {
        const response = await fetch("/api/workouts/" + workout._id, {
            method: "DELETE",
        });
        const json = await response.json();

        if (response.ok)
            dispatch({
                type: "DELETE_WORKOUT",
                payload: json,
            });
    };

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p>
                <strong>Reps: </strong>
                {workout.reps}
            </p>
            <p>
                <strong>Load (kg): </strong>
                {workout.load}
            </p>
            <p>
                <i>
                    Created:{" "}
                    {formatDistanceToNow(new Date(workout.createdAt), {
                        addSuffix: true,
                    })}
                </i>
            </p>
            <span onClick={handleDelete}>delete</span>
        </div>
    );
};

export default Workout;
