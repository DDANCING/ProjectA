import Captador from "./captator";
import { CarouselMusic } from "./carouselmusic";
import ScoreboardList from "./scoreBoard";

function Main() {
  return (
    <main className="p-4 flex gap-4 bg-muted rounded-sm h-full">
      <div className="grid grid-rows-2 gap-4">
        <div className="w-60 bg-background">
          <ScoreboardList/>
        </div>
        <div className="bg-background h-32"> <Captador/> </div>
      </div>
      <div className="rounded-sm bg-background flex-1">
        
      </div>
      <div className="bg-background rounded-sm justify-self-start flex flex-col items-center p-2">
        <CarouselMusic/>
      </div>
    </main>
  )
}
export default Main;