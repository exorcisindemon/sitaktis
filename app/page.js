"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="bg-zinc-900 flex flex-col lg:flex-row w-full h-screen items-center justify-center">
      <div className="bg-zinc-100 flex flex-col w-full lg:w-[480px] p-8 rounded-2xl gap-16">
        <div className="flex flex-col gap-4">
          <p className="text-zinc-900 font-bold text-2xl">Login</p>
          <p className="text-zinc-700 font-semibold text-lg">
            Silahkan masuk terlebih dahulu untuk mengakses dashboard Log Book
          </p>
        </div>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            className="flex w-full bg-zinc-800 px-4 py-3 rounded-lg text-lg transition-all hover:bg-zinc-700"
            placeholder="NIM"
          />
          <input
            type="password"
            className="flex w-full bg-zinc-800 px-4 py-3 rounded-lg text-lg transition-all hover:bg-zinc-700"
            placeholder="Password"
          />
        </form>
      </div>
    </main>
  );
}
