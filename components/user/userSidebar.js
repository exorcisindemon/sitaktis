import Image from "next/image";
import Link from "next/link";
import {
  MdOutlineApps,
  MdOutlineAddChart,
  MdBook,
  MdLogout,
  MdPeople,
} from "react-icons/md";

export default function UserSidebar() {
  return (
    <div className="flex flex-col w-full lg:w-[20%] items-center justify-center lg:justify-between p-8 gap-8 lg:gap-16 bg-blue-600 rounded-2xl">
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
      <div className="flex flex-row lg:flex-col w-full justify-between lg:justify-center gap-0 lg:gap-8">
        <Menu
          href={"/user/dashboard"}
          icons={<MdOutlineApps size="18" />}
          name={"Beranda"}
        />
        <Menu
          href={"/"}
          icons={<MdOutlineAddChart size="18" />}
          name={"Tugas Akhir"}
        />
        <Menu
          href={"/"}
          icons={<MdBook size="18" />}
          name={"Judul Yang Sudah Ada"}
        />
        <Menu href={"/"} icons={<MdLogout size="18" />} name={"Logout"} />
        <Profile nim={"C.00.000.0"} />
      </div>
    </div>
  );
}

function Menu({ href, icons, name }) {
  return (
    <Link
      href={href}
      className="flex flex-row w-auto lg:w-full gap-0 lg:gap-4 p-4 lg:p-2 hover:lg:p-4 items-center rounded-2xl bg-blue-700 lg:bg-blue-600 text-zinc-100 transition-all hover:bg-blue-800 hover:lg:bg-blue-700"
    >
      {icons}
      <p className="hidden text-sm font-medium lg:flex">{name}</p>
    </Link>
  );
}

function Profile({ nim }) {
  return (
    <div className="bg-blue-700 hidden lg:flex flex-col items-center justify-center w-full gap-4 px-4 py-4 rounded-2xl">
      <div className="flex text-zinc-100">
        <MdPeople size="18" />
      </div>
      <p className="flex text-sm font-bold text-zinc-100">C.00.000.0</p>
    </div>
  );
}
