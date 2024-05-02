
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "@/components/auth/card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
    headerLabel="Ops Something went wrong!"
    backButtonHref="/auth/login"
    backButtonLabel="Back to login"
    >
    <div className="w-full flex justify-center items-center">
      <ExclamationTriangleIcon className="text-primary size-8"/>
    </div>
    </CardWrapper>
  )
}