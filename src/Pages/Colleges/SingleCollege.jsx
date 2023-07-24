import { Link } from "react-router-dom";

const SingleCollege = ({ college }) => {
    const { _id, college_name, admission_dates, research_history, college_image } = college || {};
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={college_image} alt="Shoes" className="rounded-xl w-full h-[400px]" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title">{college_name}</h2>
                <p>admission_dates: {admission_dates}</p>
                <p>research_history: {research_history}</p>
                <div className="card-actions">
                    <Link to={`/viewDetails/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCollege;