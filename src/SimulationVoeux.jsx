import { useState } from "react";

const donnees = [
  { rang: 45, voeux: ["Paris", "Créteil", "Versailles"] },
  { rang: 320, voeux: ["Poitiers", "Bordeaux", "Orléans-Tours"] },
  { rang: 570, voeux: ["Amiens", "Normandie", "Limoges"] },
  { rang: 610, voeux: ["Dijon", "Nancy-Metz", "Besançon"] },
  { rang: 720, voeux: ["Lyon", "Reims", "Strasbourg"] }
];

const seuils = {
  "Aix-Marseille": 426,
  "Amiens": 571,
  "Besançon": 727,
  "Bordeaux": 252,
  "Clermont-Ferrand": 426,
  "Corse": 239,
  "Créteil": 571,
  "Dijon": 640,
  "Grenoble": 571,
  "Lille": 305,
  "Limoges": 457,
  "Lyon": 727,
  "Montpellier": 122,
  "Nancy-Metz": 516,
  "Nantes": 492,
  "Nice": 151,
  "Normandie": 744,
  "Orléans-Tours": 492,
  "Paris": 96,
  "Poitiers": 320,
  "Reims": 711,
  "Rennes": 213,
  "Strasbourg": 244,
  "Toulouse": 355,
  "Versailles": 561
};

export default function SimulationVoeux() {
  const [simul, setSimul] = useState([]);

  const lancerSimulation = () => {
    const resultat = donnees.map(({ rang, voeux }) => {
      const affectation = voeux.find((v) => rang <= (seuils[v] || 0));
      return { rang, affectation: affectation || "Aucune" };
    });
    setSimul(resultat);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Simulation à partir des vœux</h2>
      <p className="mb-4 text-gray-600">Exemple de simulation selon les 3 premiers vœux déclarés et les seuils de fermeture 2024.</p>
      <button
        onClick={lancerSimulation}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg mb-6"
      >
        Lancer la simulation
      </button>

      {simul.length > 0 && (
        <table className="table-auto mx-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Rang</th>
              <th className="border px-4 py-2">Académie attribuée</th>
            </tr>
          </thead>
          <tbody>
            {simul.map((s, idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{s.rang}</td>
                <td className="border px-4 py-2">{s.affectation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
