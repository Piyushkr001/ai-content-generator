"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/utils/db"; // Ensure correct path
import { AIOutput } from "@/utils/schema"; // Import the schema
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TemplateCard from "../components/TemplateCard";
import Templates from "@/app/(data)/Templates";

// Import the tools JSON data


// Define the type for the history data
export interface HISTORY {
    id: number;
    formadata: string;
    aiResponse: string | null;
    templateSlug: string;
    createdBy: string;
    createdAt: string | null;
}

// Function to get icon dynamically based on slug
const getIcon = (slug: string) => {
    const tool = Templates.find((tool: { slug: string; }) => tool.slug === slug);
    return tool?.icon || "/icons/default.png"; // Fallback icon
};

const History = () => {
    // Use the defined type in useState
    const [historyData, setHistoryData] = useState<HISTORY[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await db.select().from(AIOutput); // Fetch data from database
                setHistoryData(data);
            } catch (error) {
                console.error("Error fetching history data:", error);
            }
        };

        fetchData();
    }, []);

    const countWords = (text: string | null) => {
        return text ? text.trim().split(/\s+/).length : 0;
    };

    return (
        <div className="p-4 sm:p-6 md:p-8">
            <Card className="shadow-lg">
                <CardContent className="p-4 sm:p-6">
                    <h1 className="text-2xl sm:text-2xl font-bold mb-2">History</h1>
                    <p className="mb-5 text-gray-400 font-semibold text-sm">
                        Search your previously generated AI content
                    </p>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader className="bg-slate-200">
                                <TableRow>
                                    <TableHead>Template</TableHead>
                                    <TableHead>AI Response</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Words</TableHead>
                                    <TableHead>Copy</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {historyData.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="flex items-center gap-2">
                                            <Image
                                                src={getIcon(item.templateSlug)}
                                                alt={item.templateSlug}
                                                width={24}
                                                height={24}
                                            />
                                            {item.templateSlug}
                                        </TableCell>
                                        <TableCell className="truncate max-w-[200px]">{item.aiResponse}</TableCell>
                                        <TableCell>{item.createdAt}</TableCell>
                                        <TableCell>{countWords(item.aiResponse)}</TableCell>
                                        <TableCell>
                                            <Button size="sm" variant="ghost" className="text-primary" onClick={() => navigator.clipboard.writeText(item.aiResponse || "")}>
                                                Copy
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default History;
