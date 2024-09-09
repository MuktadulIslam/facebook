import { connectToDatabase } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { mobile, password } = body;
        console.log(mobile, password);

        if (!mobile || !password) {
            return NextResponse.json({ message: 'Mobile number and password are required' }, { status: 400 });
        }

        const { db } = await connectToDatabase();

        // Check if user already exists
        const existingUser = await db.collection('users').findOne({ mobile });
        if (existingUser) {
            return NextResponse.json({ message: 'Mobile number already registered' }, { status: 400 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Store the new user in the database
        const newUser = {
            mobile,
            password: hashedPassword,
        };

        await db.collection('users').insertOne(newUser);

        return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export function GET() {
    return NextResponse.json({ message: 'Only POST requests are allowed' }, { status: 405 });
}
