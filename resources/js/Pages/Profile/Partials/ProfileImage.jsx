import { Head, useForm, usePage, Link } from "@inertiajs/react";
import PrimaryButton from "../../../Components/PrimaryButton";
import { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
const ProfileImage = ({ auth, props }) => {
    const user = usePage().props.auth.user;

    const [image, setImage] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [fileName, setFileName] = useState("");
    const { data, setData, errors, post, processing } = useForm({
        profile: user.profile,
    });

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        setData("profile", e.target.files[0]);
        setFileName(e.target.files[0].name);
        setButtonDisabled(false);
    };

    function handleSubmit(e) {
        e.preventDefault();
        post(route("file.upload.store"));

        setData("profile", null);
    }

    return (
        <>
            <div className="flex items-center gap-5 mt-5">
                <div>
                    {user.profile ? (
                        <img
                            src={user.profile}
                            alt="Profile Image"
                            className="w-24 h-24 rounded-full object-cover"
                        />
                    ) : (
                        <img
                            src="/image/profile.png"
                            alt="Default Profile Image"
                            className="w-24 h-24 rounded-full object-cover mt-5"
                        />
                    )}
                </div>
                <form
                    name="createForm"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                >
                    <div className="flex flex-col justify-center items-center">
                        <div
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-main-500 dark:focus:border-main-600 focus:ring-main-500 dark:focus:ring-main-600 rounded-md shadow-sm h-12 w-full flex items-center justify-center cursor-pointer mb-2 p-5"
                            onClick={() =>
                                document
                                    .querySelector('input[name="profile"]')
                                    .click()
                            }
                        >
                            <input
                                type="file"
                                accept="image/*"
                                className=""
                                label="Profile"
                                name="profile"
                                hidden
                                onChange={handleImageChange}
                            />
                            {image ? (
                                <img src={image} alt={fileName} />
                            ) : (
                                <>
                                    <MdCloudUpload
                                        size={24}
                                        className="mr-4 text-gray-400"
                                    />
                                    <p className="text-gray-400">
                                        Browse file to upload
                                    </p>
                                </>
                            )}
                            <span className="text-red-600">
                                {errors.profile}
                            </span>
                        </div>
                        <PrimaryButton
                            disabled={buttonDisabled}
                            className="w-full items-center justify-center"
                        >
                            Update Profile Image
                        </PrimaryButton>
                    </div>
                    <div></div>
                </form>
            </div>
        </>
    );
};

export default ProfileImage;
