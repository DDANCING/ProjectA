import Header from "@/components/header/header-form";

const AuthLayout = ({ children }: { children: React.ReactNode}) => {
  
  return(
    <div className="flex flex-col h-screen bg-secondary">
    <Header/>
    {children}
      
    </div>

    
  );
}

export default AuthLayout