'use client'; // Ensure this file is client-side only

import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

// Dynamically import the Editor to prevent SSR issues
const Editor = dynamic(() => import('@toast-ui/react-editor').then((mod) => mod.Editor), { 
  ssr: false 
});

interface Props {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: Props) => {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      editorInstance.setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="flex gap-2"
        onClick={()=>navigator.clipboard.writeText(aiOutput)}
        >
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current?.getInstance()?.getMarkdown())
        }
      />
    </div>
  );
};

export default OutputSection;
