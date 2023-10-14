"use client";

import { MdLogin } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="bg-zinc-900 lg:bg-zinc-100 flex flex-col lg:flex-row w-full h-screen items-center justify-center">
      <div className="bg-zinc-900 lg:bg-zinc-900 flex flex-col w-full lg:w-[480px] p-8 lg:p-16 rounded-2xl gap-24 shadow-none lg:shadow-2xl shadow-zinc-200">
        <div className="flex flex-col gap-8 items-center">
          <Image
            className="flex lg:hidden"
            src="/poltekkesSemarangLogo.png"
            width="240"
            height="240"
            alt="poltekkesSemarangLogo"
          />
          <Image
            className="hidden lg:flex"
            src="/poltekkesSemarangLogo.png"
            width="320"
            height="320"
            alt="poltekkesSemarangLogo"
          />
          <div className="flex flex-col gap-4">
            <p className="text-zinc-100 leading-relaxed text-center font-bold text-lg lg:text-2xl">
              Login
            </p>
            <p className="text-zinc-300 leading-relaxed text-center font-semibold text-sm lg:text-lg">
              Silahkan masuk terlebih dahulu untuk mengakses dashboard Log Book
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-8">
          <InputField type={"text"} placeholder={"NIM"} />
          <InputField type={"password"} placeholder={"Password"} />
          <div className="flex flex-row gap-8 items-center justify-between">
            <p className="text-zinc-300 leading-relaxed text-start font-semibold text-sm">
              <span className="text-sky-300 mr-1">*</span>Pastikan kredensial
              yang dimasukkan sudah benar
            </p>
            <Link
              href="/user/dashboard"
              className="bg-zinc-100 transition-all hover:bg-zinc-200 p-4 font-semibold text-sm lg:text-lg rounded-lg"
            >
              <MdLogin className="flex lg:hidden" size="18" />
              <MdLogin className="hidden lg:flex" size="22" />
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

function InputField({ type, placeholder }) {
  return (
    <input
      type={type}
      className="flex w-full bg-zinc-800 text-zinc-100 px-4 lg:px-8 py-4 rounded-lg text-sm lg:text-lg transition-all hover:bg-zinc-700 focus:bg-zinc-700 focus:outline-none"
      placeholder={placeholder}
    />
  );
}
