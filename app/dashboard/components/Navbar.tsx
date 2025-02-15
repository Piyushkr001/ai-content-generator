"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between w-full px-6 py-4 bg-white shadow-md">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center">
                <Image src="/images/logo/logo.svg" alt="Logo" width={120} height={40} priority />
            </Link>

            {/* Right: Get Started */}
            <div className="flex items-center gap-3">
                <div className="h-6 w-px bg-gray-300 hidden md:block" />
                <Link href="/dashboard">
                    <Button variant="ghost" className="text-gray-700 hover:text-black flex items-center gap-2">
                        <User className="w-5 h-5" />
                        <span className="hidden md:block">Get Started</span>
                    </Button>
                </Link>
            </div>
        </nav>
    );
}
