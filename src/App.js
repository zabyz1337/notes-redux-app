import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import NoteList from "./components/NoteList/NoteList";

function App() {
  return (
    <div>
      <Header />
      <Main>
        <NoteList />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
