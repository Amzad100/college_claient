import { useEffect, useState } from "react";
import SinglecollegeCard from "./SinglecollegeCard";

const CollegeCard = () => {
    const [Colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/colleges`)
            .then((res) => res.json())
            .then((data) => {
                setColleges(data)
            })
    }, []);
    return (
        <div className='grid md:grid-cols-3 gap-5'>
            {
                Colleges.map(college => <SinglecollegeCard
                    key={college._id}
                    college={college}
                >
                </SinglecollegeCard>)
            }
        </div>
    );
};

export default CollegeCard;