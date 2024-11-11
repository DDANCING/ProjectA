import {  getActivitiesUserProgress, getGameUserProgress } from "@/actions/get-userProgress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { redirect } from "next/navigation";
import { UserProgress } from "../(protected)/_components/activities/user-progress";
import { Items } from "../(protected)/_components/activities/shop/items";
import { getUserSubscription } from "@/actions/get-user-subscription";

const ShopPage = async () => {

 const userProgressData =  getActivitiesUserProgress();
 const userSubscriptionData = getUserSubscription();
 const userMusicProgressData = getGameUserProgress();


 const [
  userProgress,
  userSubscription,
  userMusicProgress,
 ] = await Promise.all([
  userProgressData,
  userSubscriptionData,
  userMusicProgressData,
 ]);

 if (!userProgress || !userMusicProgress) {
  redirect('/activities');
 }
 const isPro = !!userSubscription?.isActive;

  return ( 
      
      
   
      <Card className="flex items-center shadow-none overflow-y-auto h-[89vh] flex-1 relative top-0 pb-10 scrollbar-none ">

          <Items
           hasActiveSubscription={isPro}
           activitieHearts={userProgress?.hearts}
           activitiePoints={userProgress?.points}
           musicHearts={userMusicProgress?.hearts}
           musicPoints={userMusicProgress?.points}
           />
          
      </Card>
          
          
         
   
  )
};
 
export default ShopPage;