"use client"
import React, { useState } from 'react'
import SearchSection from './components/SearchSection'
import TemplateListSection from './components/TemplateListSection'

const Dashboard = () => {
    const [userSearchInput, setUserSearchInput] = useState<string>('') // Initialize with an empty string

    return (
        <div>
            {/* Search Section */}
            <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />

            {/* Template List Section */}
            <TemplateListSection userSearchInput={userSearchInput} />
        </div>
    )
}

export default Dashboard

