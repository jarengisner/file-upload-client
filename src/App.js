import './App.css';

import { UploadComponent } from './components/uploading-component';
import { LoadedFiles } from './components/loaded-files-component';
import NavComponent from './components/nav-bar.component';
import { TabComponent } from './components/tab-component';

function App() {
  return (
    <div className='App'>
      <NavComponent />
      <UploadComponent />
      <TabComponent />
    </div>
  );
}

export default App;
