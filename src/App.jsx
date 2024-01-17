import { Box } from "@chakra-ui/react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Detail from "./components/Detail";

function App() {
  return (
    <Box bg="#e5e7eb">
      <Navbar />
      <Products/>
      {/* <Detail/> */}
      
    </Box>
  );
}

export default App;