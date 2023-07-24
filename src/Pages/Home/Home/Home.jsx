import Reviews from "../../Reviews/Reviews";
import Bannar from "../Bannar/Bannar";
import CollegeCard from "../CollegeCard/CollegeCard";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <CollegeCard></CollegeCard>
            <Gallery></Gallery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;