import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <div>
      <ChakraProvider>
        <MainRoutes />
      </ChakraProvider>
    </div>
  );
}

export default App;
