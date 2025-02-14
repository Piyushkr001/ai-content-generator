"use client";

import React, { useContext } from 'react'
import { useParams, useRouter } from 'next/navigation'
import FormSection from '../components/FormSection'
import OutputSection from '../components/OutputSection'
import { TEMPLATE } from '../../components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AIModel';
import { AIOutput } from '@/utils/schema';
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';

const CreateNewContent = () => {
    const params = useParams(); // ✅ Use useParams() in Client Components
    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === params["template-slug"]);
    const [loading , setLoading] = React.useState(false);
    const [aiOutput , setOutput] = React.useState("");
    const { user } = useUser(); // Destructure user from useUser
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext)
    const router = useRouter();

    const GenerateAIContent = async(formdata: any) => {
        if (totalUsage >=1000000){
            console.log("Please Upgrade");
            router.push('/dashboard/billing')
            return ;
        }
        setLoading(true);
        const SelectedPrompt = selectedTemplate?.aiPrompt;

        const FinalAIPrompt = JSON.stringify(formdata) + ", " + SelectedPrompt;

        const result = await chatSession.sendMessage(FinalAIPrompt);

        setOutput(result.response.text());
        await SaveInDb(formdata, selectedTemplate?.slug, result.response.text());
        setLoading(false);
    }

    const SaveInDb = async(formData: any, slug: string | undefined, aiResp: string) => {
        const result = await db.insert(AIOutput).values({
            formadata: formData, // Corrected property name from formadata to formData
            templateSlug: slug || "", // Ensure slug is a string, default to empty string if undefined
            aiResponse: aiResp,
            createdBy: user?.emailAddresses[0]?.emailAddress || "", // Default to empty string if undefined
            createdAt: moment().format('DD/MM/yyyy')
        });
        console.log (result); 

    }

    return (
        <div className='p-10'>
            <Link href={'/dashboard'}>
                <Button><ArrowLeft />Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                {/* Form section */}
                <FormSection selectedTemplate={selectedTemplate}
                    userFormInput={(v: any) => GenerateAIContent(v)} 
                    loading={loading} />

                {/* Output Section */}
                <div className='col-span-2'>
                    <OutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;

//Continue to 2:45:05