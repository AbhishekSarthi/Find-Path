import './App.css';
import Grid from './components/Grid';
import { GridProvider } from './components/GridContext';
function App() {
    return (
        <GridProvider>
            <div className="App">
                <Grid />
            </div>
        </GridProvider>
    );
}

export default App;
