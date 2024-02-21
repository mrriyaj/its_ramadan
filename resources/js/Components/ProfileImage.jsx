const ProfileImage = ({ type = "file", className, id, profile, ...props }) => {
    return (
        <div>
            <a>
                <img
                    src={profile || "https://via.placeholder.com/150"}
                    alt="Profile Image"
                    className="rounded-full h-20 w-20 mt-2 mb-4 curser-pointer object-cover"
                />
            </a>

            <input
                {...props}
                type={type}
                id={id}
                className={
                    "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-main-500 dark:focus:border-main-600 focus:ring-main-500 dark:focus:ring-main-600 rounded-md shadow-sm" +
                    className
                }
                accept="image/*"
            />
        </div>
    );
};

export default ProfileImage;
