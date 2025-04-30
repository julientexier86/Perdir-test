import { useState } from "react";

const seuils2024 = {
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

export default function EstimationMinMax2025() {
  const [rang, setRang] = useState(0);

  const accessibles = Object.entries(seuils2024)
    .filter(([_, fermeture]) => rang <= fermeture)
    .map(([acad]) => acad)
    .sort();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-indigo-700">Estimation ministérielle 2025</h1>
      <p className="text-gray-600">
        Cette estimation repose sur la liste des académies attendues en 2025 (issues des fourchettes ministérielles), 
        mais les seuils de fermeture ont été conservés à partir des affectations observées en 2024. 
        Elle permet ainsi de simuler les académies accessibles à chaque rang, en tenant compte des tendances passées.
      </p>

      <div>
        <label className="font-semibold">Votre rang :</label>
        <input
          type="number"
          value={rang}
          onChange={e => setRang(parseInt(e.target.value) || 0)}
          className="ml-4 p-2 border rounded w-24"
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-green-700">Académies accessibles</h2>
        <ul className="list-disc pl-5 mt-2">
          {accessibles.length > 0 ? (
            accessibles.map(a => <li key={a}>{a}</li>)
          ) : (
            <li>Aucune académie accessible</li>
          )}
        </ul>
      </div>
    </div>
  );
}
