"use client";

import { useState, useEffect } from "react";
import { Users, Calendar, Settings, LogOut, Plus, Edit, Trash2, Image as ImageIcon, Check, X } from "lucide-react";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [promotionalImages, setPromotionalImages] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: Calendar },
    { id: "doctors", label: "Doctors", icon: Users },
    { id: "services", label: "Services", icon: Settings },
    { id: "bookings", label: "Bookings", icon: Calendar },
    { id: "promotions", label: "Promotions", icon: ImageIcon },
  ];

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
      const response = await fetch(`${apiUrl}/api/bookings`);
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (id: number, status: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
      const response = await fetch(`${apiUrl}/api/bookings/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (response.ok) {
        fetchBookings();
      }
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  const deleteBooking = async (id: number) => {
    if (confirm('Are you sure you want to delete this booking?')) {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
        const response = await fetch(`${apiUrl}/api/bookings/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          fetchBookings();
        }
      } catch (error) {
        console.error('Error deleting booking:', error);
      }
    }
  };

  const addPromotionalImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPromotionalImages([...promotionalImages, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePromotionalImage = (index: number) => {
    setPromotionalImages(promotionalImages.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600">Sai Ranyata Admin</h1>
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
                  <p className="text-3xl font-bold text-primary-600">{bookings.length}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-gray-600 mb-2">Confirmed</h3>
                  <p className="text-3xl font-bold text-green-600">{bookings.filter(b => b.status === 'Confirmed').length}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-gray-600 mb-2">Pending</h3>
                  <p className="text-3xl font-bold text-orange-600">{bookings.filter(b => b.status === 'Pending').length}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-gray-600 mb-2">Promotional Images</h3>
                  <p className="text-3xl font-bold text-secondary-600">{promotionalImages.length}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "bookings" && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold">Bookings</h2>
                <div className="flex gap-2 w-full sm:w-auto">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                  <button onClick={fetchBookings} className="btn-primary flex items-center">
                    <Plus className="w-5 h-5 mr-2" />
                    Refresh
                  </button>
                </div>
              </div>
              {loading ? (
                <p className="text-gray-600">Loading bookings...</p>
              ) : (
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {bookings
                        .filter(booking => filterStatus === "all" || booking.status === filterStatus)
                        .map((booking) => (
                        <tr key={booking.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="font-medium">{booking.name}</div>
                              <div className="text-sm text-gray-500">Age: {booking.age}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">{booking.phone}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{booking.service}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{booking.doctor}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{booking.date} at {booking.time}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              booking.status === "Confirmed" ? "bg-green-100 text-green-800" :
                              booking.status === "Rejected" ? "bg-red-100 text-red-800" :
                              "bg-yellow-100 text-yellow-800"
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {booking.status === "Pending" && (
                              <div className="flex gap-2">
                                <button
                                  onClick={() => updateBookingStatus(booking.id, "Confirmed")}
                                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors flex items-center"
                                  title="Accept"
                                >
                                  <Check className="w-4 h-4 mr-1" />
                                  Accept
                                </button>
                                <button
                                  onClick={() => updateBookingStatus(booking.id, "Rejected")}
                                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors flex items-center"
                                  title="Reject"
                                >
                                  <X className="w-4 h-4 mr-1" />
                                  Reject
                                </button>
                              </div>
                            )}
                            {booking.status === "Confirmed" && (
                              <button
                                onClick={() => updateBookingStatus(booking.id, "Pending")}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors"
                                title="Mark as Pending"
                              >
                                Reset to Pending
                              </button>
                            )}
                            <button
                              onClick={() => deleteBooking(booking.id)}
                              className="ml-2 text-red-600 hover:text-red-900"
                              title="Delete"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {bookings.filter(booking => filterStatus === "all" || booking.status === filterStatus).length === 0 && (
                    <div className="p-6 text-center text-gray-500">No bookings found</div>
                  )}
                </div>
              )}
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

          {activeTab === "promotions" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Promotional Images</h2>
                <label className="btn-primary flex items-center cursor-pointer">
                  <Plus className="w-5 h-5 mr-2" />
                  Add Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={addPromotionalImage}
                    className="hidden"
                  />
                </label>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {promotionalImages.map((image, index) => (
                  <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                    <img src={image} alt={`Promotional ${index + 1}`} className="w-full h-48 object-cover" />
                    <div className="p-4 flex justify-end">
                      <button
                        onClick={() => removePromotionalImage(index)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
                {promotionalImages.length === 0 && (
                  <div className="col-span-3 bg-white rounded-lg shadow p-12 text-center text-gray-500">
                    No promotional images added yet
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
