import AddModal from "./components/AddModal";
import DataSection from "./components/DataSection";
import DeleteModal from "./components/DeleteModal";
import Header from "./components/Header";
import UpdateModal from "./components/UpdateModal";

function App() {
  return (
    <>
      <Header />
      <DataSection />
      <AddModal />
      <UpdateModal />
      <DeleteModal />
    </>
  );
}

export default App;
