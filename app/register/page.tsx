import {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Customers',
};
export default function Page() {
    return <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl font-serif">Registration Not Implemented</h1>
        <p className="mb-4">
            The registration functionality is not implemented yet.
        </p>
        <p className="mb-4">
            For testing purposes, you can use the following account information:
        </p>
        <p>Email: asd@asd.com</p>
        <p>Password: 123456</p>

        <Link href="/">
            <p className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Back to the login page Login
            </p>
        </Link>
    </div>;
}