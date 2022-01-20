import ContentBox from "./components/ContentBox";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <div className="container mx-auto flex flex-col px-10 min-h-screen py-7">
      <Header />
      <Form />
      <ContentBox />
    </div>
  );
}

export default App;
