import './App.css';
import TodoList from './components/TodoList';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <TodoList/>
      </ChakraProvider>
    </div>
  );
}

export default App;
