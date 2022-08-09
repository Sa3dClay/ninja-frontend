import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect } from "react";
import Workout from "./Workout";

const Workouts = () => {
    const { user } = useAuthContext();
    const { workouts, dispatch } = useWorkoutsContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch("/api/workouts", {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const json = await response.json();

            if (response.ok)
                dispatch({
                    type: "SET_WORKOUTS",
                    payload: json,
                });
        };

        if (user) fetchWorkouts();
    }, [dispatch, user]);

    return (
        <div className="workouts">
            {workouts &&
                workouts.length > 0 &&
                workouts.map((workout) => {
                    return <Workout key={workout._id} workout={workout} />;
                })}
        </div>
    );
};

export default Workouts;
