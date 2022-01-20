import ContentBox from "./components/ContentBox";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <div className="container mx-auto flex flex-col pt-5 pb-20 min-h-screen py-7 max-w-full">
      <Header />
      <Form />
      <ContentBox />
    </div>
  );
}

export default App;
