import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "bookings.json");

async function ensureDataDirectory() {
    const dataDir = path.join(process.cwd(), "data");
    try {
        await fs.access(dataDir);
    } catch {
        await fs.mkdir(dataDir);
    }

    try {
        await fs.access(dataFilePath);
    } catch {
        await fs.writeFile(dataFilePath, JSON.stringify([]));
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        await ensureDataDirectory();

        const fileData = await fs.readFile(dataFilePath, "utf-8");
        const bookings = JSON.parse(fileData);

        const newBooking = {
            id: Date.now().toString(),
            ...body,
            createdAt: new Date().toISOString(),
        };

        bookings.push(newBooking);
        await fs.writeFile(dataFilePath, JSON.stringify(bookings, null, 2));

        return NextResponse.json({ success: true, booking: newBooking });
    } catch (error) {
        console.error("Error saving booking:", error);
        return NextResponse.json({ success: false, error: "Failed to save booking" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await ensureDataDirectory();
        const fileData = await fs.readFile(dataFilePath, "utf-8");
        const bookings = JSON.parse(fileData);

        // Sort by newest first
        bookings.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        return NextResponse.json({ success: true, bookings });
    } catch (error) {
        console.error("Error reading bookings:", error);
        return NextResponse.json({ success: false, error: "Failed to read bookings" }, { status: 500 });
    }
}
