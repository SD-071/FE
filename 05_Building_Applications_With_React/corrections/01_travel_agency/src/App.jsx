import {Routes, Route} from "react-router-dom";
import { MainLayout } from "./layouts";
import { Home, About, Contact, Destinations, SingleDestination, NotFound } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:slug" element={<SingleDestination />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
