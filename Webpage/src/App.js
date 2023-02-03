import Nav from './components/Nav'
import Gallery from './components/Gallery'
import ImageMasonry from './components/ImagyMasonry'
import ModalSample from './components/ModalSample';
// import UploadImages from './components/backupArchive/upload-images.component';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        {/* <Gallery /> */}
        <ImageMasonry />
        {/* <ModalTest /> */}

      </div>

    </>
  );
}

export default App;
