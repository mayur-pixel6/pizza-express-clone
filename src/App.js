import './App.scss';
import { appTheme} from './theme';
import { ThemeProvider } from '@mui/material';
import { Header } from './components/Header';
import { HeroSlider } from './components/Slider';
import { Catalogue } from './components/Catalogue';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <div className="App">
        <Header />
        <HeroSlider />
        <Catalogue />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default App;
