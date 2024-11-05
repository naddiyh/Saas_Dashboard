"use client";



import { ThemeProvider } from "@mui/material";
import { ThemeDashboard } from "./theme";



interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  
  return (

      <ThemeProvider theme={ThemeDashboard}>{children}</ThemeProvider>
  
  );
}