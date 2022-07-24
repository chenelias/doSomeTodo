import React from "react";
import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";

function TodoList({ todos, deleteTodo }) {
  if (todos.length === 0) {
    return (
      <Badge colorScheme="green" p="4" borderRadius="lg" m="4">
        No any Todos
      </Badge>
    );
  }
  function gettagcolor(x) {
    if (x === "Family") {
      return "green";
    } else if (x === "Work") {
      return "blue";
    } else if (x === "School") {
      return "yellow";
    } else if (x === "Urgent") {
      return "red";
    } else if (x === "Leisure") {
      return "purple";
    }else {
      return "";
    }
  }
  return (
    <VStack
      divider={<StackDivider />}
      bordercolor="gray.100"
      borderWidth="2px"
      p={4}
      borderRadius="10px"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todoarrow) => (
        <HStack key={todoarrow.id}>
          <Text fontSize="2xl">{todoarrow.title}</Text>
          <Spacer />
          <Badge
            fontSize="13px"
            colorScheme={gettagcolor(todoarrow.tag)}
            alignItems="end"
            borderRadius="5px"
          >
            {todoarrow.tag === "none" ? "" : "#" + todoarrow.tag}
          </Badge>
          <IconButton
            onClick={() => deleteTodo(todoarrow.id,todoarrow.title)}
            icon={<FaTrashAlt />}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
