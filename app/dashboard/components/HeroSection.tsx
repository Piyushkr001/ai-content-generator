"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, LayoutTemplate, MessageCircle, Settings } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
    return (
        <main className="flex flex-col items-center justify-center px-6 py-12 space-y-12">
            {/* Hero Section */}
            <section className="text-center max-w-3xl">
                <div className="mb-4 px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-full inline-flex items-center">
                    AI CONTENT GENERATOR Membership - Join Now →
                </div>
                <h1 className="text-5xl font-bold">
                    AI Content <span className="text-blue-600">Generator</span>
                </h1>
                <p className="mt-4 text-gray-600">
                    Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
                </p>
                <Link href={'/dashboard'}>
                    <Button className="mt-6 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600  py-5 text-white hover:bg-blue-700">
                        Get started →
                    </Button>
                </Link>
            </section>

            {/* Features Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
                <FeatureCard icon={LayoutTemplate} title="25+ templates" description="Responsive, and mobile-first project on the web." href="#" />
                <FeatureCard icon={Settings} title="Customizable" description="Components are easily customized and extendable." href="#" />
                <FeatureCard icon={BookOpen} title="Free to Use" description="Every component and plugin is well documented." href="#" />
                <FeatureCard icon={MessageCircle} title="24/7 Support" description="Contact us 24 hours a day, 7 days a week." href="#" />
            </section>
        </main>
    );
}

interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    href: string;
}

const FeatureCard = ({ icon: Icon, title, description, href }: FeatureCardProps) => {
    return (
        <Link href={href} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="p-3 bg-blue-600 text-white rounded-full">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
            <span className="mt-2 text-blue-600 font-medium hover:underline">
                Learn more →
            </span>
        </Link>
    );
};