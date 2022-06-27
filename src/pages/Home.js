import WorkoutForm from "../components/workout/WorkoutForm";
import Workouts from "../components/workout/Workouts";

const Home = () => {
    return (
        <div className="home">
            <Workouts />
            <WorkoutForm />
        </div>
    );
};

export default Home;
