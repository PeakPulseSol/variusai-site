"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, LineChart, TrendingUp, Brain, Zap, Database, Lightbulb, Menu } from "lucide-react";import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
        Features
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#use-cases">
        Use Cases
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#process">
        Our Process
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
        Contact
      </Link>
    </>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-6 w-6 mr-2" />
          <span className="font-bold">VariusAI</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <NavLinks />
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <nav className="flex flex-col gap-4 mt-6">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Revolutionize Organizational Change with VariusAI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Unlock billions in value with AI-driven departmental change tracking, progress monitoring, and financial impact prediction.
                </p>
              </div>
              <div className="space-x-4">
            <Link href="#features">    <Button size="lg">Get Started</Button></Link>
              <Link href="https://bit.ly/varius-ai"> <Button variant="outline" size="lg">Join Our WaitingList</Button></Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Key Features of VariusAI</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <BarChart3 className="h-8 w-8 mx-auto mb-2" />
                  <CardTitle>Change Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  Monitor and analyze departmental changes in real-time with VariusAI's advanced algorithms.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <LineChart className="h-8 w-8 mx-auto mb-2" />
                  <CardTitle>Progress Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  Visualize and track the progress of organizational changes across all departments with intuitive dashboards.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                  <CardTitle>Predictive Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  Forecast future changes and their potential impact on your organization using VariusAI's predictive models.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="use-cases" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Corporate Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Mergers & Acquisitions</CardTitle>
                </CardHeader>
                <CardContent>
                  VariusAI helps streamline post-merger integration, potentially saving billions in synergy realization and reducing time-to-value.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Digital Transformation</CardTitle>
                </CardHeader>
                <CardContent>
                  Optimize your digital transformation journey, potentially unlocking billions in operational efficiencies and new revenue streams.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Supply Chain Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  Identify and implement supply chain improvements that can lead to billions in cost savings and increased resilience.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Workforce Restructuring</CardTitle>
                </CardHeader>
                <CardContent>
                  Navigate complex workforce changes while minimizing disruption and maximizing productivity, potentially saving billions in the long run.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="adaptive-algorithms" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Adaptive Algorithms</h2>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                VariusAI's core strength lies in its adaptive algorithms that continuously learn and evolve:
              </p>
              <ul className="list-disc text-left pl-6 space-y-2">
                <li>Machine Learning models that adapt to your organization's unique patterns and challenges</li>
                <li>Natural Language Processing to interpret and analyze qualitative data from various departments</li>
                <li>Time Series Analysis for accurate forecasting of change impacts and financial implications</li>
                <li>Reinforcement Learning algorithms that optimize decision-making processes over time</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Process: From Data to Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Database className="h-8 w-8 mx-auto mb-2" />
                  <CardTitle>Data Collection</CardTitle>
                </CardHeader>
                <CardContent>
                  VariusAI integrates with your existing systems to collect real-time data on departmental changes, financial metrics, and operational KPIs.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Zap className="h-8 w-8 mx-auto mb-2" />
                  <CardTitle>AI Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  Our adaptive algorithms analyze the collected data, identifying patterns, correlations, and potential impacts across your organization.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Lightbulb className="h-8 w-8 mx-auto mb-2" />
                  <CardTitle>Insight Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  VariusAI generates actionable insights, predictive analytics, and recommendations to drive informed decision-making and maximize value.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Unlock Billions in Value with VariusAI?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join leading corporations in leveraging AI to drive smarter, data-driven organizational changes and achieve unprecedented ROI.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Link href="https://bit.ly/varius-ai" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full" size="lg">Get Started with VariusAI</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="container mx-auto text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 VariusAI. All rights reserved. Developed by{" "}
            <Link href="https://peakpulsesol.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
              PeakPulse Solutions
            </Link>
          </p>
          <nav className="flex justify-center gap-4 sm:gap-6 mt-2">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}