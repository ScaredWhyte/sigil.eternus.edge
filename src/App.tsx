import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Landing } from "./pages/Landing"
import { WaveIndex } from "./pages/WaveIndex"
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
        <Route path="/about" element={<About />} />
        <Route path="/bridges" element={<Bridges />} />
        <Route path="/waves" element={<Waves />} />
        <Route path="/:waveSlug" element={<WaveIndex />} />
        <Route path="/:waveSlug/:songSlug" element={<SongScroll />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
