import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";

function App() {
  return (
    <div>
      <Header />

      <Main>
        <NoteForm />

        <NoteList />
      </Main>

      <Footer />
    </div>
  );
}

export default App;
