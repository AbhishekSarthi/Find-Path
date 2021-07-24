import './App.css';
import './bootstrap.min.css';
import Grid from './components/Grid';
import { GridProvider } from './components/GridContext';
function App() {
    return (
        <GridProvider>
            <div className="App">
                <h2 className="text-primary text-center">Doge To the Moon</h2>
                <div className="jumbotron">
                    <Grid />
                </div>
            </div>
        </GridProvider>
    );
}

export default App;
