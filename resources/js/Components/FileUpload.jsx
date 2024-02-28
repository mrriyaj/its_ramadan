import { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { useForm, usePage } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";

const FileUpload = ({ auth, buttonValue, className, ...props }) => {
    const user = usePage().props.auth.user;
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("File Not Selected");
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const { data, setData, errors, post, processing } = useForm({
        profile: user.profile,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("file.upload.store"));
        setData("profile", null);
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        setData("profile", e.target.files[0]);
        setFileName(e.target.files[0].name);
        setButtonDisabled(false);
    };

    return (
        <div>
            {/* {user.profile ? (
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
            )} */}

            <form
                // onSubmit={handleSubmit}
                encType="multipart/form-data"
                onClick={() =>
                    document.querySelector('input[name="file"]').click()
                }
                className={
                    "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-main-500 dark:focus:border-main-600 focus:ring-main-500 dark:focus:ring-main-600 rounded-md shadow-sm h-24 w-full flex items-center justify-center cursor-pointer my-5 " +
                    className
                }
            >
                <input
                    {...props}
                    type="file"
                    name="file"
                    id="file"
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
                        <p className="text-gray-400">Browse file to upload</p>
                    </>
                )}
            </form>
            <PrimaryButton
                disabled={buttonDisabled}
                onClick={handleSubmit}
                className="w-full items-center justify-center"
            >
                {buttonValue ? buttonValue : "Upload File"}
            </PrimaryButton>
        </div>
    );
};

export default FileUpload;
