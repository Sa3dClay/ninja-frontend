const Workout = ({ workout }) => {
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
                <i>Created at: </i>
                {workout.createdAt}
            </p>
        </div>
    );
};

export default Workout;
