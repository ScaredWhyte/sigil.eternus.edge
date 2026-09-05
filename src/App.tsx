import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Landing } from "./pages/Landing"
import { WaveIndex } from "./pages/WaveIndex"
import { SongScroll } from "./pages/SongScroll"
import { About } from "./pages/About"
import { Bridges } from "./pages/Bridges"
import { Waves } from "./pages/Waves"
import { Fiction } from "./pages/Fiction"
import { StoryPage } from "./pages/StoryPage"
import { ShowPage } from "./pages/ShowPage"
import { EpisodePage } from "./pages/EpisodePage"
import { NotFound } from "./pages/NotFound"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/bridges" element={<Bridges />} />
        <Route path="/waves" element={<Waves />} />
        <Route path="/fiction" element={<Fiction />} />
        <Route path="/fiction/stories/:storySlug" element={<StoryPage />} />
        <Route path="/fiction/shows/:showSlug" element={<ShowPage />} />
        <Route path="/fiction/shows/:showSlug/:episodeSlug" element={<EpisodePage />} />
        <Route path="/:waveSlug" element={<WaveIndex />} />
        <Route path="/:waveSlug/:songSlug" element={<SongScroll />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
