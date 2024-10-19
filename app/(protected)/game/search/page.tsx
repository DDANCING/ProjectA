import { Card } from "@/components/ui/card";
import { SearchImput } from "@/components/ui/search-input";
import { CoursesList } from "@/app/(protected)/_components/course/courses/courses-list";
import { MusicList } from "../../_components/game/music/music-list";
import { getCourses } from "@/actions/get-courses";
import { getNewMusics } from "@/actions/get-musics";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId?: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const user = await auth();
  if (!user?.user.id) {
    return redirect("/dashboard");
  }
  
  const title = searchParams.title;
  const newMusics = await getNewMusics(title);

  return (
    <div className="flex-1 pr-2">
      <Card className="bg-background/30 backdrop-blur-md shadow-none p-4">
        <div className="pb-6">
          <SearchImput />
        </div>
        <MusicList items={newMusics} />
      </Card>
    </div>
  );
};

export default SearchPage;
