import React, { useContext } from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import NewTask from "./pages/newtask/NewTask";
import NavBar from "./components/navbar/NavBar";
import TaskDetails from "./pages/taskdetails/TaskDetails";
import Result from "./pages/result/Result";
import {TaskContext} from "./context/TaskContext";

function App() {
  const { theme } = useContext(TaskContext);

  return (
    <div style={{ backgroundColor: theme.mode === "dark" ? "var(--secondary-color)" : "#fff", height: "100vh" }}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={NewTask} />
          <Route path="/tasks/:id" component={TaskDetails} />
          <Route path="/result" component={Result} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
