import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us & Book Now | Welcome Ceylon Tours",
    description: "Contact Welcome Ceylon Tours to book your dream vacation in Sri Lanka. We offer custom itineraries, cultural tours, wildlife safaris, and beach holidays.",
};

export default function BookLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
