import Counter from "@monorepo/counter";
import Page1 from "@monorepo/page1";
import Page2 from "@monorepo/page2";

function App() {
  return (
    <div style={{ display: "flex", padding: "50px", background: "#fe9901" }}>
    <Counter>
     <div style={{ width: "50%", padding: "50px", background: "#20c997" }}>
       <Page1 />
     </div>
     <div style={{ width: "50%", padding: "50px", background: "#01b4ec"}}>
       <Page2 />
     </div>
    </Counter>
    </div>
  );
}

export default App;
