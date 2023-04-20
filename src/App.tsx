import "./styles.css";
import { H } from "./component";

export default function App() {
  return (
    <div className="App">
      <div className="scopeA">
        <H />
      </div>

      <div className="scopeB">
        <H />
      </div>

      <div className="unset_scope">
        <H />
      </div>
    </div>
  );
}
