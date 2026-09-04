import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { PlayerBar } from "./PlayerBar"
import { GlobalAudio } from "./GlobalAudio"

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <div className="grain-overlay" />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <PlayerBar />
      <GlobalAudio />
    </div>
  )
}
