import Home from './Home';
import NavBar from './NavBar';



function App() {
  return (
    <div>
    <NavBar />
    <Switch>
      <Route path="/">
      <Home />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
