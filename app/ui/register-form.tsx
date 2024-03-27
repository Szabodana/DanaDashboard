import Link from "next/link";
import {Button} from './button';

export default function RegisterForm() {
    return (
        <form className="space-y-3">
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                <h1 className="mb-3 text-2xl">Registration not implemented.</h1>
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
                    <div className="mt-4">
                        <Link href="/login">
                            <p className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Go back
                            </p>
                        </Link>
                    </div>
            </div>
        </form>
    );
}