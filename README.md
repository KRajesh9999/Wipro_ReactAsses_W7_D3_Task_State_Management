# Task Management Application

##  Problem Statement
You are required to create a simple **Task Management Application** that allows users to:
- Add tasks
- Remove tasks
- Toggle the completion status of tasks  

---

## Application Architecture
The app follows **Flux & Redux principles**:
- **UI Layer**: Built with React components (`TaskInput`, `TaskList`).  
- **Actions**: Describe "what happened" (e.g., add task, remove task, toggle task).  
- **Reducer**: Pure functions that take the current state and action → return the new state.  
- **Store**: A single source of truth that holds the entire state of the app.  
- **React-Redux**: Connects React components to the Redux store using hooks like `useSelector` and `useDispatch`.

Data Flow:  
`UI → Action → Reducer → Store → UI`

---
## How to Run:
Install dependencies
npm install

Start the development server
npm start

The app will run on http://localhost:3000/

## React Hooks & Context API Usage
- **React Hooks**:
  - `useState`: Manages local input state (e.g., task input field).  
  - `useSelector`: Accesses state from the Redux store.  
  - `useDispatch`: Dispatches actions to update the store.  

- **Context API**:
  - Used for passing Redux store across the component tree (via `Provider`).  
  - Avoids "prop drilling" by making global state accessible in deeply nested components.  

---

## Project Structure

src/
│── components/
│ ├── TaskInput.js
│ ├── TaskList.js
│
│── redux/
│ ├── actions.js
│ ├── reducers.js
│ ├── store.js
│
│── App.js
│── App.css
│── index.js
│── index.css

React Snap shots:
1. Home page:
   <img width="1902" height="883" alt="image" src="https://github.com/user-attachments/assets/305deba9-ced4-4382-9885-a9cffa485040" />

2. Task Adding and Toggling:
   <img width="1908" height="950" alt="image" src="https://github.com/user-attachments/assets/d9e316b5-32e8-47b7-9d57-a48047a6e7c6" />
