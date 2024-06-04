import { db } from "@/lib/db";
import { Sidebar } from "@/app/(protected)/_components/sidebar/sidebar";
import { Categories } from "@/app/(protected)/_components/search/categories";

const SeachPage = async () => {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <main className="p-4 flex gap-4 rounded-sm h-full w-full justify-between bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-background from-primary to-background">
      <div className="hidden md:flex flex-col justify-between gap-4">
        <div className="w-60 flex-1 bg-background/30 backdrop-blur-md">
          <Sidebar />
        </div>
        <div className="bg-background/30 backdrop-blur-xl h-36 p-2"></div>
      </div>
      <div className="bg-background/30 backdrop-blur-md">
        <div className="flex items-center overflow-x-auto no-scrollbar">
          <Categories items={categories} />
          </div>
      </div>
    </main>
  );
};

export default SeachPage;
