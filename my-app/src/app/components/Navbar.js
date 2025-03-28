"use client";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Rocket } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const handleDeleteAccount = () => {
    localStorage.removeItem("user");
    logout();
    router.push("/");
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center relative">
      <h1 className="font-bold text-lg flex flex-row">
        <Rocket className="mx-2 mt-0.5 fill-red-600" /> My Dashboard
      </h1>

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`absolute md:relative top-16 md:top-0 right-0 md:flex items-center space-x-4 md:bg-transparent w-full md:w-auto p-4 md:p-0 transition-transform ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex flex-col md:flex-row items-center space-x-2"
          >
            <span className="hidden md:block">{user}</span>
            <span className="w-8 h-8 bg-gray-600 rounded-full hidden md:block items-center justify-center">
              👤
            </span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-white text-black shadow-lg rounded-lg">
              <div className="p-2 border-b">
                <p className="font-semibold text-sm md:text-md">{user}</p>
              </div>
              <button
                onClick={handleLogout}
                className="block w-full text-left p-2 hover:bg-gray-200"
              >
                Logout
              </button>
              <button
                onClick={handleDeleteAccount}
                className="block w-full text-left p-2 text-red-600 hover:bg-gray-200"
              >
                Delete Account
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
