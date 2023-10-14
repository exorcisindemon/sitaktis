import Image from "next/image";
import Link from "next/link";
import { MdOutlineApps, MdOutlineAddChart, MdLogout } from "react-icons/md";

export default function AdminSidebar() {
  return (
    <div className="flex flex-col w-full lg:w-[20%] items-center justify-center p-8 gap-8 lg:gap-16 bg-zinc-900">
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
      <div className="flex flex-row lg:flex-col w-full justify-center gap-8">
        <Menu href={"/"} icons={<MdOutlineApps size="22" />} name={"Beranda"} />
        <Menu
          href={"/"}
          icons={<MdOutlineAddChart size="22" />}
          name={"Tugas Akhir"}
        />
        <Menu
          href={"/"}
          icons={<MdBook size="22" />}
          name={"Judul Yang Sudah Ada"}
        />
        <Menu href={"/"} icons={<MdLogout size="22" />} name={"Logout"} />
      </div>
    </div>
  );
}

function Menu({ href, icons, name }) {
  return (
    <Link
      href={href}
      className="flex flex-row w-auto lg:w-full gap-0 lg:gap-4 p-4 items-center rounded-2xl bg-zinc-800 text-zinc-100 transition-all hover:bg-zinc-700"
    >
      {icons}
      <p className="hidden text-lg font-medium lg:flex">{name}</p>
    </Link>
  );
}
