import { useState } from 'react'
import Stage         from './components/layout/Stage.jsx'
import ProjetosPanel from './components/panels/ProjetosPanel.jsx'
import JornadaPanel  from './components/panels/JornadaPanel.jsx'
import SobreMimPanel from './components/panels/SobreMimPanel.jsx'
import RedesPanel    from './components/panels/RedesPanel.jsx'

const PANELS = {
  top:    ProjetosPanel,
  left:   JornadaPanel,
  bottom: SobreMimPanel,
  right:  RedesPanel,
}

export default function App() {
  const [activePanel, setActivePanel] = useState(null)
  const ActiveComponent = activePanel ? PANELS[activePanel] : null

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#0c0c0c]">
      <Stage onOpenPanel={setActivePanel} />
      {ActiveComponent && (
        <ActiveComponent onClose={() => setActivePanel(null)} />
      )}
    </div>
  )
}