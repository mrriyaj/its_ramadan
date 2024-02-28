import App from "@/Layouts/AppLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ auth, quiz }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        quiz_id: quiz.id,
        name: "",
        description: "",
        quantity: "",
        image: "",
        status: "active",
        created_by: auth.user.id,
        redeem_date: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("rewards.user.store"), { onSuccess: () => reset() });
    }

    return (
        <App auth={auth}>
            <Head title="Create a new quiz" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">Create a new quiz</h2>
                        </div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={submit}>

                                <div>
                                    <InputLabel forInput="name" value="Name" />
                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        onChange={(e) => setData("name", e.target.value)}
                                    />
                                    <InputError error={errors.name} />
                                </div>

                                <div>
                                    <InputLabel forInput="description" value="Description" />
                                    <TextInput
                                        id="description"
                                        type="text"
                                        name="description"
                                        value={data.description}
                                        onChange={(e) => setData("description", e.target.value)}
                                    />
                                    <InputError error={errors.description} />
                                </div>

                                <div>
                                    <InputLabel forInput="quantity" value="Quantity" />
                                    <TextInput
                                        id="quantity"
                                        type="number"
                                        name="quantity"
                                        value={data.quantity}
                                        onChange={(e) => setData("quantity", e.target.value)}
                                    />
                                    <InputError error={errors.quantity} />
                                </div>

                                <div>
                                    <InputLabel forInput="image" value="Image" />
                                    <input
                                        type="file"
                                        id="image"
                                        name="Image"
                                        className="mt-1 block w-full"
                                        autoComplete="image"
                                        onChange={(e) =>
                                            setData("image", e.target.files[0])
                                        }
                                        required
                                    />
                                    <InputError error={errors.image} />
                                </div>

                                <div>
                                    <InputLabel forInput="redeem_date" value="Redeem Date" />
                                    <TextInput
                                        id="redeem_date"
                                        type="date"
                                        name="redeem_date"
                                        value={data.redeem_date}
                                        onChange={(e) => setData("redeem_date", e.target.value)}
                                    />
                                    <InputError error={errors.redeem_date} />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    {/* <Link
                                        href={route("quizzes.index")}
                                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500 dark:focus:ring-offset-gray-800"
                                    >
                                        Go to Quiz lists
                                    </Link> */}
                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                    >
                                        Create Quiz
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </App>
    )

}
