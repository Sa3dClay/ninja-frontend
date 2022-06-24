import { useEffect, useState } from "react";
import Workout from "./Workout";

const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch("/api/workouts");
            const json = await response.json();

            if (response.ok) setWorkouts(json);
        };

        fetchWorkouts();
    }, []);

    return (
        <div className="workouts">
            {workouts.length > 0 &&
                workouts.map((workout) => {
                    return <Workout key={workout._id} workout={workout} />;
                })
            }
        </div>
    );
};

export default Workouts;
