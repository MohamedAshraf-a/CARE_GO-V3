"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">

      <div className="bg-white p-12 rounded-3xl shadow-xl border w-[400px] text-center">

        <h1 className="text-3xl font-black">
          CareGo Login
        </h1>

        <p className="text-slate-500 mt-2 text-sm">
          Sign in to access booking system
        </p>

        <button
          onClick={() => signIn("google")}
          className="mt-8 w-full bg-purple-600 text-white py-3 rounded-2xl font-semibold hover:bg-purple-700 transition"
        >
          Continue with Google
        </button>

      </div>

    </div>
  );
}