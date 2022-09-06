import Main from './views/Main'
import Detail from './views/Detail'
import Form from './components/Form';
import UsersForm from './components/UsersForm';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/players">
            <Main />
          </Route>
          <Route path="/player/:id">
            <Detail />
          </Route>
          <Route path="/new">
            <Form />
          </Route>
          <Route path="/">
            <UsersForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

