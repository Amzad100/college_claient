import { useLoaderData } from "react-router-dom";

const ViewDetailes = () => {
    const colleges = useLoaderData();
    console.log(colleges)
    const { college_name, admission_dates, research_history, college_image } = colleges;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={college_image} alt="Shoes" className="rounded-xl w-full h-full" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title">{college_name}</h2>
                <p>admission_dates: {admission_dates}</p>
                <p>research_history: {research_history}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailes;