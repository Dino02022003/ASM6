import { Box, Flex, Image } from "@chakra-ui/react";

function Home() {
  return (
   <Flex w="full" h="94.5vh" bg="#e5e7eb" overflow="hidden">
      <Flex w="full" justifyContent="flex-end" pt="100px" pr="100px">
        <Image src="public\Shared\images\comming-soon.png" w="500px" h="500px"/>
      </Flex>
   </Flex>
  );
}

export default Home;