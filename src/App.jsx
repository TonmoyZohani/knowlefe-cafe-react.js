import Header from "./assets/components/Header";
import Blogs from "./assets/components/Blogs";
import Questions from "./assets/components/Questions";
import DataFetch from "./assets/components/DataFetch";
import GetPosts from "./assets/components/GetPosts";
import Father from "./assets/components/Father";
import Counter from "./assets/components/Counter";
import { createContext, useState } from "react";

export const RingContext = createContext();
export const MoneyContext = createContext();

function App() {
  const [money, setMoney] = useState("Taka");

  console.log(money); // This will also change

  return (
    // <MoneyContext.Provider value={{ money, setMoney }}>
    //   <div
    //     style={{
    //       width: "100%",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <div
    //       style={{
    //         border: "1px solid red",
    //         width: "20%",
    //         padding: "10px",
    //       }}
    //     >
    //       <span>Grand Father</span>
    //       <RingContext.Provider value="Gold">
    //         <Father />
    //       </RingContext.Provider>
    //     </div>
    //   </div>
    // </MoneyContext.Provider>
    <Counter />
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
