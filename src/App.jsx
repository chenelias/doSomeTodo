import { React, useState, useEffect } from "react";
import {
  VStack,
  Heading,
  IconButton,
  Spacer,
  useToast,
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { content } from "./components/AddTodo";

function App() {
  const addtoast = useToast();
  const initialTodos = [];
  const [todos, settodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });
  function deleteTodo(id, title) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    settodos(newTodos);
        addtoast({
          title: `Delete Todo "${title}"`,
          status: "info",
          duration: 1500,
          isClosable: true,
        });
  }
  function addTodo(todo) {
    settodos([...todos, todo]);
  }
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack p={4}>
      <IconButton
        icon={
          colorMode === "light" ? <BsFillSunFill /> : <BsFillMoonStarsFill />
        }
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      ></IconButton>

      <Heading
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r,pink.500,purple.500,blue.400)"
        bgClip="text"
      >
        DoSome ToDo
      </Heading>
      <Spacer />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;