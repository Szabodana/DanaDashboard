import {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Customers',
};

export default function Page() {
    return (
        <main className="flex items-center justify-center h-screen">
            <div className="w-full max-w-[400px] p-8 bg-gray-50 rounded-lg shadow-md">
                <form className="space-y-4">
                    <h1 className="text-3xl font-serif mb-4">Registration Not Implemented</h1>
                    <p className="text-gray-600 mb-4">
                        The registration functionality is not implemented yet, for testing purposes use these credentials:
                    </p>
                    <div className="mb-4">
                        <p className="text-gray-800 font-medium">Email:</p>
                        <p className="text-gray-600">user@nextmail.com</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-800 font-medium">Password:</p>
                        <p className="text-gray-600">123456</p>
                    </div>
                    <Link href="/">
                        <p className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-center">
                            Go Back
                        </p>
                    </Link>
                </form>
            </div>
        </main>
    );
};