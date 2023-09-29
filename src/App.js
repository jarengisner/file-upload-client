import './App.css';

import { UploadComponent } from './components/uploading-component';
import { LoadedFiles } from './components/loaded-files-component';

function App() {
  return (
    <div className='App'>
      <UploadComponent />
      <LoadedFiles />
    </div>
  );
}

export default App;
