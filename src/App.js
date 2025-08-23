import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title"> Task Manager </h1>
        <p className="app-subtitle">Organize your tasks with Us</p>
      </header>

      <main className="app-main">
        <section className="task-section">
          <TaskInput />
          <TaskList />
        </section>
      </main>

      <footer className="app-footer">
        <p>© 2025 Rajesh K | Designed with React</p>
      </footer>
    </div>
  );
}

export default App;