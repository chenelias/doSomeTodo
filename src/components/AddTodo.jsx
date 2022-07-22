import { React, useState } from "react";
import { HStack, Input, Button, useToast, Box } from "@chakra-ui/react";
import { nanoid } from "nanoid";
function AddTodo({ addTodo }) {
  const toast = useToast();
  function handleSubmit(x) {
    x.preventDefault();
    if (!content) {
      toast({
        title: "No Content",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      return;
    } else {
      console.log();
      toast({
        title: `New Todo "${content}"`,
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    }
    const todo = {
      id: nanoid(),
      title: content,
    };
    addTodo(todo);
    setcontent("");
  }
  const [content, setcontent] = useState();
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="6" mb="100px">
        <Input
          variant="filled"
          placeholder="type some todo"
          value={content}
          onChange={(x) => setcontent(x.target.value)}
        />
        <Button colorScheme="green" px="8" type="sunmit">
          Add Todo
        </Button>
        {/* <br /><Box h='200px'></Box> */}
      </HStack>
    </form>
  );
}

export default AddTodo;
