import { getUserProgress } from "@/actions/get-userProgress";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { redirect } from "next/navigation";
import { UserProgress } from "../../_components/activities/user-progress";
import { Items } from "../../_components/activities/shop/items";
import { getUserSubscription } from "@/actions/get-user-subscription";
import { Promo } from "../../_components/activities/shop/promo";

const ShopPage = async () => {

 const userProgressData = getUserProgress();
 const userSubscriptionData = getUserSubscription();


 const [
  userProgress,
  userSubscription,
 ] = await Promise.all([
  userProgressData,
  userSubscriptionData,
 ]);

 if (!userProgress || !userProgress.activeExercise) {
  redirect('/activities');
 }
 const isPro = !!userSubscription?.isActive;

  return ( 
      
      
     <div className="flex flex-row-reverse gap-[48px] px-6">
        <Card className="hidden lg:block w-[368px] stick self-end bottom-6 h-full">
        <div className="min-h-[calc(94vh-40px)] sticky top-6 flex flex-col gap-y-4">
        <UserProgress
          activeCourse={userProgress.activeExercise}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
          />
           {!isPro && (
          <Promo />
        )}
          </div>
         
      </Card>
      
      <Card className=" overflow-y-auto h-[89vh] flex-1 relative top-0 pb-10 scrollbar-none ">
      <div className="w-full flex flex-col items-center pt-5">
       <Image
            src="/img/icons/shop.svg"
            alt="Shop"
            height={90}
            width={90}
          />
          <h1 className="text-center font-bold text-foreground text-2xl my-6">
            Shop
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Spend your points on cool stuff.
          </p>
          <Items
           hasActiveSubscription={isPro}
           hearts={userProgress.hearts}
           points={userProgress.points}
           />
          </div>
      </Card>
          
          
         
        </div>
   
   
  )
};
 
export default ShopPage;