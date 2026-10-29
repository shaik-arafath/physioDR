"use client";

import { useState } from "react";
import { Users, Calendar, Settings, LogOut, Plus, Edit, Trash2 } from "lucide-react";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: Calendar },
    { id: "doctors", label: "Doctors", icon: Users },
    { id: "services", label: "Services", icon: Settings },
    { id: "bookings", label: "Bookings", icon: Calendar },
  ];

  const bookings = [
    { id: 1, name: "Rahul Sharma", service: "Back Pain Relief", doctor: "Dr. Rajesh Kumar", date: "2024-10-30", time: "10:00 AM", status: "Confirmed" },
    { id: 2, name: "Priya Patel", service: "Neck Pain Treatment", doctor: "Dr. Priya Sharma", date: "2024-10-30", time: "11:30 AM", status: "Pending" },
    { id: 3, name: "Amit Kumar", service: "Sports Injury Rehab", doctor: "Dr. Amit Patel", date: "2024-10-31", time: "2:00 PM", status: "Confirmed" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600">PhysioDR Admin</h1>
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg min-h-screen">
          <nav className="p-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <tab.icon className="w-5 h-5 mr-3" />
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeTab === "dashboard" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-gray-600 mb-2">Total Bookings</h3>
                  <p className="text-3xl font-bold text-primary-600">156</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-gray-600 mb-2">Today's Appointments</h3>
                  <p className="text-3xl font-bold text-secondary-600">12</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-gray-600 mb-2">Active Doctors</h3>
                  <p className="text-3xl font-bold text-primary-600">6</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-gray-600 mb-2">Pending Requests</h3>
                  <p className="text-3xl font-bold text-orange-600">3</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "bookings" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Bookings</h2>
                <button className="btn-primary flex items-center">
                  <Plus className="w-5 h-5 mr-2" />
                  Add Booking
                </button>
              </div>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {bookings.map((booking) => (
                      <tr key={booking.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{booking.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{booking.service}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{booking.doctor}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{booking.date} at {booking.time}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            booking.status === "Confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-primary-600 hover:text-primary-900 mr-3">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "doctors" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Manage Doctors</h2>
                <button className="btn-primary flex items-center">
                  <Plus className="w-5 h-5 mr-2" />
                  Add Doctor
                </button>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-600">Doctor management interface would go here.</p>
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Manage Services</h2>
                <button className="btn-primary flex items-center">
                  <Plus className="w-5 h-5 mr-2" />
                  Add Service
                </button>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-600">Service management interface would go here.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
