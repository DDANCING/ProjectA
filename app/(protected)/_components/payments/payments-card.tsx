import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ArrowBigRightIcon, CreditCard, Dot } from "lucide-react"
import { PaymentButton } from "./payments-button"

 
export function PaymentMetod() {
  return (
    <Tabs defaultValue="card" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger className="gap-1" value="card">Card <CreditCard className="size-4"/></TabsTrigger>
        <TabsTrigger value="pix">Pix</TabsTrigger>
      </TabsList>
      <TabsContent value="card" className="flex gap-2 w-full ">
        <Card className="w-full border-transparent ">

          <CardContent className="space-y-2 m-2">
          <Label >
            <div className="flex pb-3 gap-2">
            <Input placeholder="name"> 
            </Input>
            <Input placeholder="lastname"> 
            </Input>
            </div>
            <Input placeholder="card number">
            </Input>
            <div className="flex pt-3"> 
            <Input placeholder="MM">
            </Input>
            <Input placeholder="AA">
            </Input>
            <Input placeholder="CVC" className="ml-2">
            </Input>
            </div>
          </Label>
          </CardContent>
          <CardFooter>
          <Button className="w-full">Pay R$14,99</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Annually" className="flex gap-2"  >
      <Card className=" border-transparent bg-muted-foreground/20">

<CardContent className="space-y-2 gap-2">
<div className="text-xs">
  <h1 className="font-bold text-3xl">
FREE
  </h1>
  <p>R$0/mo</p>
  <p className="flex">
  <Dot/> Limited Use
  </p>
  <p className="flex">
  5 lives a day
  </p>
  <p className="flex">
  <Dot/> Limited Accessibility
  </p>
  
</div>
</CardContent>
<CardFooter>

</CardFooter>
</Card>
<Card className="w-[50%] border-transparent bg-muted-foreground/20">

<CardContent className="space-y-2">
<div className="text-xs">
  <h1 className="font-bold text-3xl">
PRO
  </h1>
  <p>R$9,99/mo  <p className="line-through
">R$14,99/mo</p></p>
  <p className="flex">
  <Dot/> Unlimited Use
  </p>
  <p className="flex">
  Unlimited lives
  </p>
  <p className="flex">
  <Dot/> full Accessibility
  </p>
  <PaymentButton mode="modal" asChild>
 <Button>Subscribe <ArrowBigRightIcon/></Button>
 </PaymentButton>
  
</div>

</CardContent>
<CardFooter>

</CardFooter>
</Card>
      </TabsContent>
    </Tabs>
  )
}
