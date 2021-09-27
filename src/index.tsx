import { createSignal } from "solid-js";
import { render } from "solid-js/web";

const App = () => {
  const [count, setCount] = createSignal(0);
  const inc = () => void setCount(count() + 1);

  return (
    <div>
      <h1>My awesome &ndash; counter</h1>

      <button onClick={inc}>{count()}</button>
    </div>
  );
};

render(App, document.getElementById("app"));
