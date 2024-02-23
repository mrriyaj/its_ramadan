import { Head, useForm, usePage, Link } from "@inertiajs/react";
import PrimaryButton from "../../../Components/PrimaryButton";
import { useState } from "react";

const ProfileImage = ({ auth, props }) => {
    const user = usePage().props.auth.user;

    const [image, setImage] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const { data, setData, errors, post, processing } = useForm({
        profile: user.profile,
    });

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        setData("profile", e.target.files[0]);
        setButtonDisabled(false);
    };

    function handleSubmit(e) {
        e.preventDefault();
        post(route("file.upload.store"));

        setData("profile", null);
    }

    return (
        <>
            {user.profile ? (
                <img
                    src={user.profile}
                    alt="Profile Image"
                    className="w-24 h-24 rounded-full object-cover mt-5"
                />
            ) : (
                <img
                    src="/image/profile.png"
                    alt="Default Profile Image"
                    className="w-24 h-24 rounded-full object-cover mt-5"
                />
            )}
            <form
                name="createForm"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <div className="flex flex-col">
                    <div className="my-5">
                        <input
                            type="file"
                            accept="image/*"
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-main-500 dark:focus:border-main-600 focus:ring-main-500 dark:focus:ring-main-600 rounded-md shadow-sm "
                            label="Profile"
                            name="profile"
                            onChange={handleImageChange}
                        />
                        <span className="text-red-600">{errors.profile}</span>
                    </div>
                </div>
                <div className="mt-4">
                    <PrimaryButton disabled={buttonDisabled}>
                        Update Profile Image
                    </PrimaryButton>
                </div>
            </form>
        </>
    );
};

export default ProfileImage;
