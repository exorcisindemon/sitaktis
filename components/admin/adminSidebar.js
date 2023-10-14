import Link from "next/link";
import { MdOutlineApps, MdOutlineAddChart, MdLogout } from "react-icons/md";

export default function AdminSidebar() {
  return (
    <div className="flex flex-row lg:flex-col w-full lg:w-[15%] items-start justify-center p-4 gap-8 bg-zinc-900">
      <Menu href={"/"} icons={<MdOutlineApps size="22" />} name={"Beranda"} />
      <Menu
        href={"/"}
        icons={<MdOutlineAddChart size="22" />}
        name={"Log Book"}
      />
      <Menu href={"/"} icons={<MdLogout size="22" />} name={"Logout"} />
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
