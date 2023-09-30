export default function NavPills({ contexto, index, callback }) {

  const toggleTab = (id) => {
    callback(id);
  };

  return (
    <ul id="nav-pills" class="nav nav-pills">
      {contexto.map(({ id, label }) => (
        <li
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
