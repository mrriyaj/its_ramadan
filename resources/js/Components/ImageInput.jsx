import React, { forwardRef, useState, useRef } from 'react';

export default forwardRef(function ImageInput({ className, ...props }, ref) {
    const input = ref ? ref : useRef();
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }


    return (

        <label
            className={
                'flex items-center justify-center w-64 h-32 border-2 border-dashed rounded-md cursor-pointer ' +
                className
            }
        >
            <input
                ref={input}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
                {...props}
            />

            {image ? (
                <img
                    src={image}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-md"
                />
            ) : (
                <span className="text-gray-400">Upload Image</span>
            )}
        </label>

    );
});
