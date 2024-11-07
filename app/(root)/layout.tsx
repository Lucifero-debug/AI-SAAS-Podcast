import Menu from "@/components/Menu";
import Right from "@/components/Right";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <div className="flex h-full w-full">
            {/* left sidebar */}
            <div className="hidden sm:flex w-1/6 bg-[#15171C]">
            <Menu/>
            </div>
            <div className="w-4/6 bg-[#101114] overflow-y-auto">
          {children}
            </div>
          {/* right sidebar */}
          <div className="w-1/3 sm:w-1/4 bg-[#15171C]">
          <Right/>
          </div>
        </div>
      </html>
    );
  }