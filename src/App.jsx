import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Simulateur from "./Simulateur";
import SimulationVoeux from "./SimulationVoeux";
import EstimationMinMax2025 from "./EstimationMinMax2025";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white p-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-700 mb-2">
            Simulateur PERDIR 2025
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            Estimez vos opportunités d’affectation selon votre rang et vos choix.
          </p>
          <nav className="space-x-4 mt-4">
            <Link to="/" className="text-indigo-600 hover:underline">Simulation</Link>
            <Link to="/voeux" className="text-indigo-600 hover:underline">Mes vœux</Link>
            <Link to="/estimation-2025" className="text-indigo-600 hover:underline">Estimation 2025</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Simulateur />} />
          <Route path="/voeux" element={<SimulationVoeux />} />
          <Route path="/estimation-2025" element={<EstimationMinMax2025 />} />
        </Routes>
      </div>
    </Router>
  );
}
