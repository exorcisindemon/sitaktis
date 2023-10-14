import UserSidebar from "@/components/user/userSidebar";

export default function UserDashboard() {
  return (
    <main className="flex flex-col lg:flex-row w-full h-full lg:h-screen">
      <UserSidebar />
      <div className="flex flex-col w-full lg:w-[85%] items-center justify-center p-4 gap-8 bg-zinc-100">
        Hi
      </div>
    </main>
  );
}
