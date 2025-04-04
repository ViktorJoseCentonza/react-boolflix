import './App.css'
import { MediaProvider } from "./contexts/Context";
import Header from './components/Header';
import Main from './components/main';
function App() {
  return (
    <>
      <MediaProvider>
        <Header />
        <Main />
      </MediaProvider>
    </>
  )
}

export default App
