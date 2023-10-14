import AdminSidebar from "@/components/admin/adminSidebar";

export default function AdminDashboard() {
  return (
    <main className="flex flex-col lg:flex-row w-full h-full lg:h-screen">
      <AdminSidebar />
      <div className="flex flex-col w-full lg:w-[80%] items-center justify-center p-8 gap-8 bg-zinc-100">
        Hi
      </div>
    </main>
  );
}
