import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { Text, TouchableOpacity, View } from "react-native";
import useTheme from "../hooks/useTheme";

export default function Index() {
  const { toggleDarkMode } = useTheme()

  const todos = useQuery(api.todos.getTodos)
  console.log(todos)

  const addTodo = useMutation(api.todos.addTodo)
  const clearAllTodos = useMutation(api.todos.clearAllTodos)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle the mode</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => addTodo({text: 'first test'})}>
        <Text>Add new Todo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => clearAllTodos()}>
        <Text>Clear all</Text>
      </TouchableOpacity>
    </View>
  );
}
