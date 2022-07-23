import { React, useState } from "react";
import {
  HStack,
  Input,
  Button,
  useToast,
  Box,
  InputGroup,
  InputLeftAddon,
  Spacer,
  Select,
  Wrap,
  WrapItem,
  Text,
  Flex,
} from "@chakra-ui/react";
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
      tag: tag,
      tagcolor: colortag,
    };
    addTodo(todo);
    setcontent("");
  }
  const [content, setcontent] = useState();
  const [tag, settag] = useState();
  const [colortag, setcolortag] = useState();

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup mt="20px">
        <Input
          borderRadius="10px"
          mr="10px"
          variant="filled"
          placeholder="type some todo"
          value={content}
          onChange={(x) => setcontent(x.target.value)}
        />
        <Spacer />
        <Select
          w="200px"
          borderRadius="10px"
          placeholder="Select Tag"
          onChange={(x) => settag(x.target.value)}
        >
          <option value="Family">Family</option>
          <option value="School">School</option>
          <option value="Work">Work</option>
          <option value="Urgent">Urgent</option>
          <option value="Leisure">Leisure</option>
        </Select>
      </InputGroup>
      <center>
        <Button colorScheme="green" mt="10px" px="8" type="sunmit">
          Add Todo
        </Button>
      </center>
    </form>
  );
}

export default AddTodo;
