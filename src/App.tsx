import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Landing } from "./pages/Landing"
import { WaveOneIndex } from "./pages/WaveOneIndex"
import { SongScroll } from "./pages/SongScroll"
import { About } from "./pages/About"
import { Bridges } from "./pages/Bridges"
import { Waves } from "./pages/Waves"
import { NotFound } from "./pages/NotFound"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/wave-1" element={<WaveOneIndex />} />
        <Route path="/wave-1/:slug" element={<SongScroll />} />
        <Route path="/about" element={<About />} />
        <Route path="/bridges" element={<Bridges />} />
        <Route path="/waves" element={<Waves />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
