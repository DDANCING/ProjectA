

const AuthLayout = ({ children }: { children: React.ReactNode}) => {
  
  return(
    <div className="h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-background from-primary to-background">
      {children}
    </div>
  );
}

export default AuthLayout