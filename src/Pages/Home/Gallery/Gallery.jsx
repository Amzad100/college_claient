const Gallery = () => {
    








    return (
        <div className="my-3">
            <h1 className="text-center font-bold text-3xl my-3 text-pink-800">Photo Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 justify-center">
                <div className="card bg-base-100">
                    <figure><img src="https://i.ibb.co/6FR5Gnc/1.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card bg-base-100">
                    <figure><img src="https://i.ibb.co/wL8fLHX/2.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card bg-base-100">
                    <figure><img src="https://i.ibb.co/Hp0BhSJ/3.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card bg-base-100">
                    <figure><img src="https://i.ibb.co/5sWBY8q/4.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card bg-base-100">
                    <figure><img src="https://i.ibb.co/JqHvQbB/5.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card bg-base-100">
                    <figure><img src="https://i.ibb.co/yRYx8RH/6.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card bg-base-100">
                    <figure><img src="https://i.ibb.co/djM8tjT/7.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card bg-base-100">
                    <figure><img src="https://i.ibb.co/nj9ndf0/8.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card bg-base-100">
                    <figure><img src="https://i.ibb.co/VHPBb9P/9.jpg" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default Gallery;