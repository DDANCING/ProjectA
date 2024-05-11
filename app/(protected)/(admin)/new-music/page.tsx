import { RoleGate } from "@/components/auth/role-gate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

import { UserRole } from "@prisma/client";


const NewMusicPage = async () => {

  return (
    <div className=" w-[50%] h-full m-4">
   <RoleGate allowedRole={UserRole.ADMIN}>
    <Card className="flex flex-col justify-between h-full border-primary">
      <CardHeader>
        New music create
      </CardHeader>
      <CardContent className="space-y-4  m-2">
        
      </CardContent>
      <CardFooter>
        <Button>
          a
        </Button>
      </CardFooter>
    </Card>
    </RoleGate>   
    </div>
  )
}
export default NewMusicPage;