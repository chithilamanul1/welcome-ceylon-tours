"use client";

import { useEffect, useState } from "react";

type Booking = {
    id: string;
    name: string;
    email: string;
    phone: string;
    tour: string;
    date: string;
    message: string;
    createdAt: string;
};

export default function AdminPage() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const res = await fetch("/api/bookings");
                const data = await res.json();
                if (data.success) {
                    setBookings(data.bookings);
                } else {
                    setError("Failed to load bookings");
                }
            } catch (err) {
                setError("Error fetching bookings");
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    return (
        <div className="min-h-screen pt-24 pb-12 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-white uppercase tracking-wider">Admin Dashboard</h1>
                    <div className="text-gray-400">Total Bookings: {bookings.length}</div>
                </div>

                {loading ? (
                    <div className="text-center text-gray-400 py-12">Loading bookings...</div>
                ) : error ? (
                    <div className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded-lg text-center">
                        {error}
                    </div>
                ) : bookings.length === 0 ? (
                    <div className="bg-neutral-900 border border-white/10 rounded-2xl p-12 text-center text-gray-400">
                        No bookings found yet.
                    </div>
                ) : (
                    <div className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-black/50 border-b border-white/10">
                                        <th className="p-4 text-sm font-semibold text-gray-300 uppercase tracking-wider">Date Submitted</th>
                                        <th className="p-4 text-sm font-semibold text-gray-300 uppercase tracking-wider">Client Details</th>
                                        <th className="p-4 text-sm font-semibold text-gray-300 uppercase tracking-wider">Tour & Date</th>
                                        <th className="p-4 text-sm font-semibold text-gray-300 uppercase tracking-wider">Message</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10">
                                    {bookings.map((booking) => (
                                        <tr key={booking.id} className="hover:bg-white/5 transition-colors">
                                            <td className="p-4 text-sm text-gray-400 whitespace-nowrap">
                                                {new Date(booking.createdAt).toLocaleString()}
                                            </td>
                                            <td className="p-4">
                                                <div className="font-medium text-white">{booking.name}</div>
                                                <div className="text-sm text-gray-400">{booking.email}</div>
                                                <div className="text-sm text-gray-400">{booking.phone}</div>
                                            </td>
                                            <td className="p-4">
                                                <div className="inline-block px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-2">
                                                    {booking.tour}
                                                </div>
                                                <div className="text-sm text-gray-300">
                                                    Pref: {new Date(booking.date).toLocaleDateString()}
                                                </div>
                                            </td>
                                            <td className="p-4 text-sm text-gray-400 max-w-xs truncate" title={booking.message}>
                                                {booking.message || "-"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
