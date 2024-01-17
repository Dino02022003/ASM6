import { useState, useEffect } from "react";
import { Button, useNumberInput } from "@chakra-ui/react";

import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Stack,
  Image,
  Text,
  Container,
  HStack,
  Input,
} from "@chakra-ui/react";

function Detail({ selectedProduct }) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      max: 99,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(selectedProduct);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://64914e8a2f2c7ee6c2c7fae2.mockapi.io/product"
      );
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  const handleProductClick = (product) => {
    setSelected(product);
  };

  
  return (
    <Flex w="full" h="100vh" gap={5} px={10} py={5}>
      <Box w="60%" maxH="800px" bg="#fff" py={10}>
        <Flex justifyContent="center" w="full">
          <Image
            src={selected.imageUrl}
            maxW="500px"
            maxH="500px"
            objectFit="contain"
          />
        </Flex>
        <Box>
          <Heading size="lg" px={5}>
            {selected.productName}
          </Heading>
          <Text py="1" px={5}>
            {selected.description}
          </Text>
        </Box>
        <Box>
          <Text px={10} fontWeight="bold">
            $ {selected.price}
          </Text>
          <Flex justifyContent="space-between">
          <HStack w="auto" ml={10}>
          <Button {...dec} >-</Button>
            <Input {...input} w="40px" p="10px" alignItems="center" justifyContent="center"/>
            <Button {...inc} >+</Button>
          </HStack>
          <Button mr={20}>
            Add to cart
          </Button>
          </Flex>
        </Box>
      </Box>
      <Box width="40%" overflow="auto">
        {products.map((product) => (
          <Card
            key={product.productId}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            h="150px"
            p={5}
            mb="5px"
          >
            <Image
              objectFit="contain"
              w="150px"
              h="auto"
              src={product.imageUrl}
            />

            <Stack justify="center" align="center" >
              <CardBody>
                <Heading noOfLines={1} size="md">{product.productName}</Heading>
                <Text py="1" noOfLines={2}>{product.description}</Text>
                <Flex justifyContent="space-between">
                  <Text fontSize="lg" fontWeight="bold">$ {product.price}</Text>
                  <Text
                    variant="solid"
                    colorScheme="White"
                    color="#99bdfa"
                    _hover={{ color: "blue" }}
                    cursor="pointer"
                    onClick={() => handleProductClick(product)}
                  >
                    Details
                  </Text>
                </Flex>
              </CardBody>
            </Stack>
          </Card>
        ))}
      </Box>
    </Flex>
  );
}

export default Detail;
