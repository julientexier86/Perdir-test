import { useState } from "react";

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

const academies = Object.keys(seuils);

export default function SimulationVoeux() {
  const [rang, setRang] = useState(0);
  const [voeux, setVoeux] = useState(Array(10).fill(""));

  const handleVoeuChange = (index, value) => {
    const newVoeux = [...voeux];
    newVoeux[index] = value;
    setVoeux(newVoeux);
  };

  const getStatut = (v) => {
    if (!v) return null;
    const seuil = seuils[v];
    if (!seuil) return null;
    return rang <= seuil ? "✅ Accessible" : "❌ Inaccessible";
  };

  const getColor = (v) => {
    if (!v) return "text-gray-400";
    const seuil = seuils[v];
    if (!seuil) return "text-gray-400";
    const tension = seuil <= 250 ? "text-red-600" : seuil <= 500 ? "text-yellow-600" : "text-green-600";
    return tension;
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Mes vœux d'académies</h2>
      <p className="text-gray-600 mb-6">Entrez votre rang et sélectionnez jusqu’à 10 académies. Le simulateur indique si chaque vœu est probablement accessible selon les seuils de fermeture 2024.</p>

      <div className="mb-6">
        <label className="font-semibold">Votre rang :</label>
        <input
          type="number"
          value={rang}
          onChange={(e) => setRang(parseInt(e.target.value) || 0)}
          className="ml-4 p-2 border rounded w-24"
        />
      </div>

      <div className="space-y-4">
        {voeux.map((voeu, index) => (
          <div key={index} className="flex items-center gap-4">
            <label className="w-20">Vœu {index + 1} :</label>
            <select
              value={voeu}
              onChange={(e) => handleVoeuChange(index, e.target.value)}
              className="border p-2 rounded w-64"
            >
              <option value="">-- Choisir une académie --</option>
              {academies.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
            {voeu && (
              <span className={`text-sm font-semibold ${getColor(voeu)}`}>{getStatut(voeu)}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
