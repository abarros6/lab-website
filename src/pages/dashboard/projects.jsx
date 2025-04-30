import Head from 'next/head'
import Dashboard from '@/components/ProjectDashboard'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import ProjectLayout from '@/components/ProjectLayout'


export default function Home() {
  return (
    
      
    <Dashboard title={"Projects"}>
        <ProjectLayout />
    </Dashboard> 
      
    
  )
}
