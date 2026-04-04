import DebugBar from "@/components/mock/DebugBar";

export default function MockLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <DebugBar />
    </>
  );
}
