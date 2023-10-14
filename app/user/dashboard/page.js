import Link from "next/link";

import UserSidebar from "@/components/user/userSidebar";
import { MdLink } from "react-icons/md";

export default function UserDashboard() {
  return (
    <main className="flex flex-col lg:flex-row w-full h-full lg:h-screen">
      <UserSidebar />
      <div className="flex flex-col w-full lg:w-[80%] items-start justify-start p-8 gap-8 bg-zinc-100">
        <p className="font-semibold text-xl">Selamat Datang di Dashboard</p>
        <div className="bg-zinc-200 flex flex-col gap-8 w-full rounded-lg p-4">
          <p className="text-zinc-900 font-semibold text-lg">
            KP/TA/Seminar/Skripsi/Tesis
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-zinc-900 font-semibold text-lg">
              Alur Tugas Akhir
            </p>
            <ul className="flex flex-col gap-4 w-full">
              <li className="flex flex-col lg:flex-row items-start lg:items-center w-full gap-4 lg:gap-2 text-zinc-900 font-medium text-sm">
                Mahasiswa melakukan pengajuan, untuk memulai pengajuan mahasiswa
                dapat mengunjungi menu
                <ButtonATA link={"/"} name={"Pengajuan Tugas Akhir"} />
              </li>
              <li className="flex flex-col lg:flex-row items-start lg:items-center w-full gap-4 lg:gap-2 text-zinc-900 font-medium text-sm">
                Jika pengajuan telah di Acc oleh Koordinator, mahasiswa dapat
                melakukan bimbingan pada menu
                <ButtonATA link={"/"} name={"Bimbingan Tugas Akhir"} />
              </li>
              <li className="flex flex-col lg:flex-row items-start lg:items-center w-full gap-4 lg:gap-2 text-zinc-900 font-medium text-sm">
                Setelah bimbingan selesai, mahasiswa mulai mendaftar ujian pada
                menu
                <ButtonATA link={"/"} name={"Pendaftaran Ujian Tugas Akhir"} />
              </li>
              <li className="flex flex-col lg:flex-row items-start lg:items-center w-full gap-4 lg:gap-2 text-zinc-900 font-medium text-sm">
                Jika telah selesai bimbingan mahasiswa mengupload revisi ujian
                pada menu
                <ButtonATA link={"/"} name={"Revisi Tugas Akhir"} />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-zinc-900 font-semibold text-lg">
              Panduan Pengerjaan
            </p>
            <ul className="flex flex-row gap-4 lg:gap-2 w-full lg:w-auto">
              <ButtonATA link={"/"} name={"Panduan PPT"} />
              <ButtonATA link={"/"} name={"Panduan PDF"} />
            </ul>
          </div>
        </div>
        <div className="bg-zinc-200 flex flex-col gap-8 w-full rounded-lg p-4">
          <p className="text-zinc-900 font-semibold text-lg">
            Pengajuan Mahasiswa (Update Terakhir)
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-zinc-900 font-semibold text-lg">Tugas Akhir</p>
            <ul className="flex flex-col gap-4 w-full">
              <li className="flex flex-row items-center w-full gap-4 lg:gap-2">
                <p className="text-zinc-900 uppercase font-semibold text-sm">
                  Progress Pengajuan
                </p>
                <Status name={"Acc"} />
              </li>
              <li className="flex flex-col items-start w-full gap-4 lg:gap-2">
                <p className="text-zinc-900 uppercase font-semibold text-sm">
                  Progress Pengajuan Acc
                </p>
                <div className="flex flex-row gap-4 w-full lg:w-auto">
                  <p className="text-zinc-900 font-medium text-sm w-[25%] lg:w-40">
                    Judul
                  </p>
                  <p className="text-zinc-900 font-medium text-sm w-[75%] lg:w-auto">
                    Penerapan Metode Prototype Dalam Pemodelan Sistem Informasi
                    Atlet Pada IPSI Kabupaten Kubu Raya
                  </p>
                </div>
                <div className="flex flex-row gap-4 w-full lg:w-auto">
                  <p className="text-zinc-900 font-medium text-sm w-[25%] lg:w-40">
                    Tanggal Daftar
                  </p>
                  <p className="text-zinc-900 font-medium text-sm w-[75%] lg:w-auto">
                    00-00-0000
                  </p>
                </div>
                <div className="flex flex-row gap-4 w-full lg:w-auto">
                  <p className="text-zinc-900 font-medium text-sm w-[25%] lg:w-40">
                    Dosen Pembimbing
                  </p>
                  <p className="text-zinc-900 font-medium text-sm w-[75%] lg:w-auto">
                    Muhammad Naufal Rizki
                  </p>
                </div>
                <div className="flex flex-row gap-4 w-full lg:w-auto">
                  <p className="text-zinc-900 font-medium text-sm w-[25%] lg:w-40">
                    Jenis Bimbingan
                  </p>
                  <p className="text-zinc-900 font-medium text-sm w-[75%] lg:w-auto">
                    Proposal
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

function ButtonATA({ link, name }) {
  return (
    <Link
      href={link}
      className="bg-zinc-900 text-zinc-100 flex flex-row gap-2 items-center px-2 py-1 rounded-lg font-medium text-sm transition-all hover:bg-zinc-700"
    >
      <MdLink />
      {name}
    </Link>
  );
}

function Status({ link, name }) {
  return (
    <label
      href={link}
      className="bg-green-500 text-zinc-100 flex flex-row gap-2 items-center px-2 py-1 rounded-lg font-medium text-sm transition-all hover:bg-green-700"
    >
      <MdLink />
      {name}
    </label>
  );
}
