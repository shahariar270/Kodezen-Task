
import './App.css'
import ColorManager from './Component/ColorManager'
import SettingsMenu from './Component/Main'

import Sidebar from './Component/Sidebar'
import Topbar from './Component/Topbar'
import { DndProvider } from 'react-dnd'; // Import DndProvider
import { HTML5Backend } from 'react-dnd-html5-backend'; // Import HTML5Backend


function App() {
 return(
  <div className=".kzui-app">
    <Topbar/>
    <div className="kzui-app-side">
      <Sidebar/>
      <SettingsMenu/>
      <DndProvider backend={HTML5Backend}> {/* Wrap ColorManager with DndProvider */}
      <ColorManager />
    </DndProvider>
    </div>
  </div>
 )
}

export default App
