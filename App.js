// React, componentes, estaticos


import "./App.css";
import Welcome from "./componentes/Welcome";

function App() {
  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      <Welcome />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;