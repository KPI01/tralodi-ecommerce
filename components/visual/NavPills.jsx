export default function NavPills({ contexto, index, callback }) {

  const toggleTab = (id) => {
    callback(id);
  };

  return (
    <ul id="nav-pills" className="nav nav-pills">
      {contexto.map(({ id, label }) => (
        <li
        key={id}
          id="nav-pill-item"
          className="nav-item mx-1"
          onClick={() => toggleTab(id)}
        >
          <a
            id="nav-pill-link"
            className={index === id ? "nav-link active" : "nav-link"}
            uid={id}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
