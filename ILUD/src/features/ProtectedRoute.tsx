import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { FormEvent } from "react";


interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
 
  const router = useRouter();

  useEffect(() => {
   
      router.push("/login");
    
  }, [router]);

  return <>{children ? children : null}</>;
};

export default ProtectedRoute;