
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";

const MusicSelector = () => {
  return (
    <Carousel className="h-64 w-64 flex">
      <CarouselContent>
        <CarouselItem>
        

        </CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MusicSelector;