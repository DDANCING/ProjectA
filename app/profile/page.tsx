import { auth } from "@/auth";



const ProfilePage = async () => {
  const user = await auth();
  return ( 
    <main className=" flex rounded-sm h-full w-s justify-between bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-background from-primary to-background">
      <div className="bg-transparent backdrop-blur-md flex-1">
      <div className="h-full w-full flex justify-center items-center">
    
      <div className="absolute inset-0 -z-10">
         
      </div>
      
    </div>
    </div>
    <div className="flex h-full w-full md:w-[50%] bg-background">
    
    </div>
    
    </main>
   );
}
 
export default ProfilePage;