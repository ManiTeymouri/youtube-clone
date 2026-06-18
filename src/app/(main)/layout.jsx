import Sidebar from "@/components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="grid grid-cols-[1fr_7fr]">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
