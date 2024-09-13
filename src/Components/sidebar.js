import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import Logo from "./Images/logo.png";
import "simplebar-react/dist/simplebar.min.css"; // Import SimpleBar styles
import Wallet from "./wallet";
import {
  Home,
  Layout,
  FileText,
  Mail,
  MessageCircle,
  Calendar,
  ShoppingCart,
  BookOpen,
  Truck,
  DollarSign,
  X,
  ChevronDown,
  Circle,
} from "lucide-react"; // Using Lucide icons

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state

  // Toggle dropdown state
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="h-screen w-64 bg-white shadow-lg dark:bg-gray-900 text-gray-400 dark:text-slate-300">
      {/* Sidebar content with custom scroll */}
      <SimpleBar style={{ maxHeight: "100vh" }}>
        <div className="p-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-10 h-6" />
            <h1 className="ml-3 text-violet-200 text-2xl font-bold">Vuexy</h1>

          </div>

          {/* Close button visible only on small screens */}
          <button
            className="md:hidden text-gray-500"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="w-6 h-6" /> {/* Close button */}
          </button>
        </div>

        <nav className="mt-0 ml-4 mr-4">
        < Wallet  />


          {/* Dashboards Menu with Dropdown */}
          <div
            onClick={toggleDropdown}
            className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <Home className="h-5 w-5 text-gray-500" />
              <span className="text-gray-500">Dashboards</span>
            </div>
            <span className="text-sm bg-red-500 text-white rounded-full px-2">
              5
            </span>
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transition-transform duration-300 ease-in-out transform ${
                isDropdownOpen ? "rotate-0" : "-rotate-90"
              }`}
            />
          </div>
          {/* Dropdown content with transition */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isDropdownOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="text-m mt-2 space-y-4 ml-4">
              <li className="flex items-center space-x-2">
                <Circle className="h-3 w-3 text-gray-500" />
                <span className="text-gray-700">Analytics</span>
              </li>
              <li className="flex items-center space-x-2">
                <Circle className="h-3 w-3 text-gray-500" />
                <span className="text-gray-700">CRM</span>
              </li>
              <li className="flex items-center space-x-2">
                <Circle className="h-3 w-3 text-gray-500" />
                <span className="text-gray-700">eCommerce</span>
              </li>
              <li className="flex items-center space-x-2">
                <Circle className="h-3 w-3 text-gray-500" />
                <span className="text-gray-700">Logistics</span>
              </li>
              <li className="flex items-center space-x-2">
                <Circle className="h-3 w-3 text-gray-500" />
                <span className="text-gray-700">Academy</span>
              </li>
            </ul>
          </div>

          {/* Other Main Menu Items */}
          <div className="mb-6">
            <ul className="mt-2 space-y-2">
              <li className="flex items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <Layout className="h-5 w-5 text-gray-500" />
                <span className="ml-3 text-gray-700">Layouts</span>
              </li>
              <li className="flex items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <FileText className="h-5 w-5 text-gray-500" />
                <span className="ml-3 text-gray-700">Front Pages</span>
              </li>
            </ul>
          </div>

          {/* Apps & Pages */}
          <div>
            <h2 className="ml-3 text-gray-500 uppercase tracking-wide text-sm">
              Apps & Pages
            </h2>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <Mail className="h-5 w-5 text-gray-500" />
                <span className="ml-3 text-gray-700">Email</span>
              </li>
              <li className="flex items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <MessageCircle className="h-5 w-5 text-gray-500" />
                <span className="ml-3 text-gray-700">Chat</span>
              </li>
              <li className="flex items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <Calendar className="h-5 w-5 text-gray-500" />
                <span className="ml-3 text-gray-700">Calendar</span>
              </li>
              <li className="flex items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <ShoppingCart className="h-5 w-5 text-gray-500" />
                <span className="ml-3 text-gray-700">eCommerce</span>
              </li>
              <li className="flex items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <BookOpen className="h-5 w-5 text-gray-500" />
                <span className="ml-3 text-gray-700">Academy</span>
              </li>
              <li className="flex items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <Truck className="h-5 w-5 text-gray-500" />
                <span className="ml-3 text-gray-700">Logistics</span>
              </li>
              <li className="flex items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <DollarSign className="h-5 w-5 text-gray-500" />
                <span className="ml-3 text-gray-700">Invoice</span>
              </li>
            </ul>
          </div>
        </nav>
      </SimpleBar>
    </div>
  );
};

export default Sidebar;
