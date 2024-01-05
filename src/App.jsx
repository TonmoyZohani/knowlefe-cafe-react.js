import Header from "./assets/components/Header";
import Blogs from "./assets/components/Blogs";
import Questions from "./assets/components/Questions";
import DataFetch from "./assets/components/DataFetch";
import GetPosts from "./assets/components/GetPosts";

function App() {
  const blogTitle = "Game of Life";
  return (
    <div className="max-w-7xl mx-auto">
      <GetPosts blogTitle={blogTitle} />
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
