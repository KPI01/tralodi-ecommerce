import { marcas } from "../context/marcas";

export default function Marcas() {
  return (
    <div className="container-fluid">
      <h1 className="display-2 fw-bold">Marcas Aliadas</h1>
      {marcas.map(({ label }) => (
          <h2 className="display-6">{label}</h2>
      ))}
    </div>
  );
}
