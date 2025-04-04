import './App.css'
import { MediaProvider } from "./contexts/Context";
import Header from './components/header';
function App() {
  return (
    <>
      <MediaProvider>
        <Header />
      </MediaProvider>
    </>
  )
}

export default App
