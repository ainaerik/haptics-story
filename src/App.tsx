import Properties from "./stories/Properties";
import { getMockPanelContent } from "./stories/assets/mock";

const App = () => {
  const panelContents = getMockPanelContent();

  const handleSave = async () => {
    console.log("Save");
  };

  const handleClose = () => {
    console.log("Close");
  };

  return (
    <div>
      <Properties
        panelContents={panelContents}
        handleSave={handleSave}
        handleClose={handleClose}
      />
    </div>
  );
};

export default App;
