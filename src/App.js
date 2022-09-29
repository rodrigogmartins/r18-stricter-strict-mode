import './App.css';
import { RunCodeOnce } from './use-effect-strategies/RunCodeOnce';
import { CleanupUndoPage } from './use-effect-strategies/CleanupUndoPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CleanupUndoPage />
        <RunCodeOnce />
      </header>
    </div>
  );
}

export default App;
