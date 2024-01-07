import Header from "./assets/components/Header";
import Blogs from "./assets/components/Blogs";
import Questions from "./assets/components/Questions";
import DataFetch from "./assets/components/DataFetch";
import GetPosts from "./assets/components/GetPosts";
import Father from "./assets/components/Father";
import { createContext } from "react";

export const RingContext = createContext();

function App() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px solid red",
          width: "20%",
          padding: "10px",
        }}
      >
        <span>Grand Father</span>
        <RingContext.Provider value="Gold">
          <Father />
        </RingContext.Provider>
      </div>
    </div>
  );
}

export default App;

{
  /*<Header />*/
}
{
  /*<Blogs />*/
}
{
  /*<Questions />*/
}
{
  /*<DataFetch />*/
}
