"use client"
export default function AuthPage({ isSignin }: {
    isSignin: boolean
}) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
                <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">{isSignin ? "Sign in" : "Sign up"}</h2>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">{isSignin ? "Sign in" : "Sign up"}</button>
            </div>
        </div>
    );
}