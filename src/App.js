
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import router from './Router/Router';

function App() {

 
  return (
    <div data-theme="light" className="App  max-w-screen-xl mx-auto">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
