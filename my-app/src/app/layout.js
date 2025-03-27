import { AuthProvider } from "@/app/context/AuthContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "@/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
