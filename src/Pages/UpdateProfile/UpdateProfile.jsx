import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="mx-auto max-w-7xl">
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 pt-16">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder={user.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder={user.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">University</span>
                        </label>
                        <input type="text" placeholder={user.university} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" placeholder={user.address} className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;