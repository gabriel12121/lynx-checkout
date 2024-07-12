import React from "react"
import Navbar from '@/components/navbar'
import Header from '@/components/header'
import PageWrapper from '@/components/pagewrapper'

export default function User({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <Navbar />
          <div className="flex flex-col">
             <Header />
            <PageWrapper>{children}</PageWrapper>
          </div>
        </div>
        </>
    );
}