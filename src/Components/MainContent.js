//new

import React, { useState } from "react";
import { User, Briefcase } from "lucide-react";
import Sidebar from "./sidebar";
import Header from "./header";

const EmploymentDetailsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Sample data for weekly attendance for 8 employees
  const weeklyAttendance = [
    {
      name: "Alice Johnson",
      position: "HR Manager",
      attendance: [
        "Present",
        "Present",
        "Present",
        "Leave",
        "Present",
        "Present",
        "Leave",
      ],
    },
    {
      name: "Robert Lee",
      position: "Marketing Lead",
      attendance: [
        "Present",
        "Leave",
        "Present",
        "Present",
        "Leave",
        "Present",
        "Present",
      ],
    },
    {
      name: "Daniel Kim",
      position: "Product Manager",
      attendance: [
        "Leave",
        "Present",
        "Present",
        "Present",
        "Present",
        "Leave",
        "Present",
      ],
    },
    {
      name: "Sophia Brown",
      position: "Software Developer",
      attendance: [
        "Present",
        "Present",
        "Leave",
        "Present",
        "Present",
        "Present",
        "Leave",
      ],
    },
    {
      name: "Michael Scott",
      position: "Regional Manager",
      attendance: [
        "Present",
        "Present",
        "Present",
        "Leave",
        "Leave",
        "Present",
        "Present",
      ],
    },
    {
      name: "Pam Beesly",
      position: "Receptionist",
      attendance: [
        "Present",
        "Leave",
        "Present",
        "Present",
        "Present",
        "Present",
        "Leave",
      ],
    },
    {
      name: "Jim Halpert",
      position: "Sales Representative",
      attendance: [
        "Present",
        "Present",
        "Leave",
        "Leave",
        "Present",
        "Present",
        "Present",
      ],
    },
    {
      name: "Dwight Schrute",
      position: "Assistant Manager",
      attendance: [
        "Present",
        "Present",
        "Present",
        "Present",
        "Leave",
        "Present",
        "Leave",
      ],
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100 relative dark:bg-gray-800 text-gray-900 dark:text-slate-300">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 bg-gray-800 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
        {/* Sidebar placeholder */}
        <div className="hidden lg:block w-64 bg-white shadow-lg md:hidden">
          {/* Sidebar content goes here */}
          <Sidebar />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Main content area */}
        <main className="p-6 dark:bg-gray-800">
          {/* Employee cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {weeklyAttendance.map((employee, index) => (
              <div className="flex items-stretch" key={index}>
                <div className="w-full bg-white shadow-lg flex flex-col rounded-lg">
                  {renderEmployeeCard(
                    employee.name,
                    employee.position,
                    `$${Math.floor(Math.random() * 50 + 50)}k`, // Random salary between 50k and 100k
                    `Hire Date: ${getRandomHireDate()}`, // Random hire date
                    index % 2 === 0 ? "User" : "Briefcase"
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Weekly Attendance Table */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 dark:bg-gray-900 text-gray-900 dark:text-slate-300">
            <h2 className="text-lg font-semibold mb-4">Weekly Attendance</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-slate-300">
                    <th className="px-4 py-2 text-left">Employee Name</th>
                    <th className="px-4 py-2 text-left">Position</th>
                    <th className="px-4 py-2 text-left">Monday</th>
                    <th className="px-4 py-2 text-left">Tuesday</th>
                    <th className="px-4 py-2 text-left">Wednesday</th>
                    <th className="px-4 py-2 text-left">Thursday</th>
                    <th className="px-4 py-2 text-left">Friday</th>
                    <th className="px-4 py-2 text-left">Saturday</th>
                    <th className="px-4 py-2 text-left">Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  {weeklyAttendance.map((employee, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">{employee.name}</td>
                      <td className="px-4 py-2">{employee.position}</td>
                      {employee.attendance.map((day, i) => (
                        <td
                          key={i}
                          className={`px-4 py-2 ${
                            day === "Present"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {day}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Function to render employee cards
const renderEmployeeCard = (name, position, salary, hireDate, icon) => {
  const Icon = icon === "User" ? User : Briefcase;
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 dark:bg-gray-900 text-gray-900 dark:text-slate-300">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-500">{name}</h3>
        <Icon className="text-blue-500 h-6 w-6" />
      </div>
      <p className="text-lg font-semibold">{position}</p>
      <p className="text-gray-500">{salary}</p>
      <p className="text-gray-500">{hireDate}</p>
    </div>
  );
};

// Function to generate a random hire date
const getRandomHireDate = () => {
  const startDate = new Date(2015, 0, 1); // Jan 1, 2015
  const endDate = new Date(2022, 0, 1); // Jan 1, 2022
  const hireDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
  return hireDate.toDateString();
};

export default EmploymentDetailsPage;
