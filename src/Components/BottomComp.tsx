import { data } from "./data";

const BottomComp = () => {
  return (
    <div className="bottom--wrapper">
      <ul>
        {data.map((d) => {
          return (
            <li key={d.id}>
              <h2>{d.time}</h2>
              <p className="price">{d.price}</p>
              <p>per person</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export { BottomComp };
