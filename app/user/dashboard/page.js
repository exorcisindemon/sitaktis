import { MdFactCheck, MdChecklist, MdArrowOutward } from "react-icons/md";

import UserSidebar from "@/components/user/userSidebar";
import Link from "next/link";

export default function UserDashboard() {
  return (
    <div className="bg-white flex flex-col lg:flex-row w-full p-4 gap-4 h-full lg:h-screen">
      <UserSidebar />
      <div className="flex flex-col w-full gap-4 overflow-y-auto">
        <div className="bg-zinc-100 flex flex-col p-8 w-full h-auto gap-8 rounded-2xl">
          <div className="text-blue-600 flex flex-row w-full gap-4 items-center justify-start">
            <MdChecklist size="22" />
            <p className="font-bold text-lg">Alur Tugas Akhir</p>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-4 w-full gap-4">
            <AlurTugasAkhir
              explanation={
                "1. Mahasiswa melakukan pengajuan, untuk memulai pengajuan mahasiswa dapat mengunjungi menu"
              }
              link={"/"}
              name={"Pengajuan Tugas Akhir"}
            />
            <AlurTugasAkhir
              explanation={
                "2. Jika pengajuan telah di Acc oleh Koordinator, mahasiswa dapat melakukan bimbingan pada menu"
              }
              link={"/"}
              name={"Bimbingan Tugas Akhir"}
            />
            <AlurTugasAkhir
              explanation={
                "3. Setelah bimbingan selesai, mahasiswa mulai mendaftar ujian pada menu"
              }
              link={"/"}
              name={"Pendaftaran Ujian Tugas Akhir"}
            />
            <AlurTugasAkhir
              explanation={
                "4. Jika telah selesai bimbingan mahasiswa mengupload revisi ujian pada menu"
              }
              link={"/"}
              name={"Revisi Tugas Akhir"}
            />
          </div>
        </div>
        <div className="bg-zinc-100 flex flex-col p-8 w-full h-full gap-8 rounded-2xl">
          <div className="text-blue-600 flex flex-row w-full gap-4 items-center justify-start">
            <MdFactCheck size="22" />
            <p className="font-bold text-lg">Pengajuan Mahasiswa</p>
          </div>
          <div className="flex flex-col lg:flex-row w-full h-full gap-4">
            <div className="flex flex-col gap-4 w-full lg:w-[30%]">
              <div className="flex flex-col w-full h-full items-start justify-start lg:justify-between gap-4 bg-transparent lg:bg-blue-600 p-0 lg:p-8 rounded-none lg:rounded-2xl">
                <p className="text-zinc-900 lg:text-zinc-100 text-base lg:text-lg font-semibold">
                  Panduan Pengerjaan
                </p>
                <div className="flex flex-row w-full gap-4">
                  <PanduanPengerjaan link={"/"} name={"PDF"} />
                  <PanduanPengerjaan link={"/"} name={"PPT"} />
                </div>
              </div>
              <div className="flex flex-col w-full h-full items-start justify-start lg:justify-between gap-4 bg-transparent lg:bg-blue-600 p-0 lg:p-8 rounded-none lg:rounded-2xl">
                <p className="text-zinc-900 lg:text-zinc-100 text-base lg:text-lg font-semibold">
                  Proses Pengajuan
                </p>
                <ProsesPengajuan link={"/"} name={"ACC"} />
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-[70%] h-full items-start justify-start lg:justify-between gap-4 bg-transparent lg:bg-zinc-200 p-0 lg:p-8 rounded-none lg:rounded-2xl">
              <p className="text-zinc-900 lg:text-blue-600 text-base lg:text-lg font-semibold">
                Proses Pengajuan Acc
              </p>
              <div className="flex flex-col w-full gap-4">
                <ProsesPengajuanAcc
                  name={"Judul"}
                  details={
                    "Penerapan Metode Prototype Dalam Pemodelan Sistem Informasi Atlet Pada IPSI Kabupaten Kubu Raya"
                  }
                />
                <ProsesPengajuanAcc
                  name={"Tanggal Daftar"}
                  details={"00-00-0000"}
                />
                <ProsesPengajuanAcc
                  name={"Dosen Pembimbing"}
                  details={"Muhammad Naufal Rizki"}
                />
                <ProsesPengajuanAcc
                  name={"Jenis Bimbingan"}
                  details={"Proposal"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AlurTugasAkhir({ explanation, link, name }) {
  return (
    <div className="flex flex-col justify-between gap-4 bg-transparent lg:bg-zinc-200 p-0 lg:p-8 rounded-none lg:rounded-2xl">
      <p className="text-zinc-900 text-sm font-medium">{explanation}</p>
      <Link
        href={link}
        className="bg-blue-600 text-zinc-100 flex items-center justify-center text-sm font-medium px-4 py-2 rounded-2xl transition-all hover:bg-blue-700"
      >
        {name}
      </Link>
    </div>
  );
}

function PanduanPengerjaan({ link, name }) {
  return (
    <Link
      href={link}
      className="bg-blue-600 lg:bg-blue-700 text-zinc-100 flex flex-row gap-2 items-center justify-center text-sm font-medium px-4 py-2 rounded-2xl transition-all hover:bg-blue-700 hover:lg:bg-blue-800"
    >
      <MdArrowOutward />
      {name}
    </Link>
  );
}

function ProsesPengajuan({ link, name }) {
  return (
    <Link
      href={link}
      className="bg-green-600 lg:bg-green-700 text-zinc-100 flex flex-row gap-2 items-center justify-center text-sm font-medium px-4 py-2 rounded-2xl transition-all hover:bg-green-700 hover:lg:bg-green-800"
    >
      <MdArrowOutward />
      {name}
    </Link>
  );
}

function ProsesPengajuanAcc({ name, details }) {
  return (
    <div className="flex flex-row w-full gap-4">
      <p className="flex w-[40%] lg:w-[25%] uppercase text-zinc-900 text-sm font-bold">
        {name}
      </p>
      <p className="flex w-[60%] lg:w-[75%] uppercase text-zinc-900 text-sm font-medium">
        {details}
      </p>
    </div>
  );
}
