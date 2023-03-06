import "./Lista.css";

export default function Lista() {
  let conteudos = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "01:00:00",
    },
  ];

  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {" "}
        {conteudos.map((item) => (
          <li key={item.tarefa}>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}{" "}
      </ul>
    </aside>
  );
}
