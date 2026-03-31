import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import TaskDetail from './pages/TaskDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Fix CSS Grid', completed: false, description: 'Fix the alignment on the landing page.' },
    { id: 2, title: 'Setup Router', completed: true, description: 'Implement React Router for navigation.' },
    { id: 3, title: 'Deploy to GitHub', completed: false, description: 'Push the final code to the repository.' },
  ]);

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
          <NavLink to="/tasks" className={({ isActive }) => isActive ? 'active-link' : ''}>Tasks</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks tasks={tasks} />} />
            <Route path="/tasks/:id" element={<TaskDetail tasks={tasks} />} />
            <Route path="/about" element={<About />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;