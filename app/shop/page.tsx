import {  getActivitiesUserProgress } from "@/actions/get-userProgress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { redirect } from "next/navigation";
import { UserProgress } from "../(protected)/_components/activities/user-progress";
import { Items } from "../(protected)/_components/activities/shop/items";
import { getUserSubscription } from "@/actions/get-user-subscription";
import { Promo } from "../(protected)/_components/activities/shop/promo";
import { Rank } from "../(protected)/_components/activities/rank";
import { Quests } from "../(protected)/_components/activities/quests";
import { Button } from "@/components/ui/button";
import { Plans } from "../(protected)/_components/payments/card";

const ShopPage = async () => {

 const userProgressData =  getActivitiesUserProgress();
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
      
      
   
      <Card className="flex items-center shadow-none overflow-y-auto h-[89vh] flex-1 relative top-0 pb-10 scrollbar-none ">

          <Items
           hasActiveSubscription={isPro}
           hearts={userProgress.hearts}
           points={userProgress.points}
           />
          
      </Card>
          
          
         
   
  )
};
 
export default ShopPage;