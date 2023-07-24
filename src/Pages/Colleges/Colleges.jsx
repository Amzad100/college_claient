import { useEffect, useState } from 'react';
import SingleCollege from './SingleCollege';
const Colleges = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('https://bangladashi-colleges-server.vercel.app/colleges')
            .then(res => res.json())
            .then(result => {
                setColleges(result)
            })
    }, [])
    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {
                colleges.map(college => <SingleCollege
                    key={college._id}
                    college={college}
                ></SingleCollege>)
            }
        </div>
    );
};

export default Colleges;