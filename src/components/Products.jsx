import {
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Link,
  Divider,
  Card,
  CardBody,
  Heading,
  Stack,
  CardFooter,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Detail from "./Detail";

function Products(props) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [product, setProduct] = useState([]);
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://64914e8a2f2c7ee6c2c7fae2.mockapi.io/product"
      );
      const data = await response.json();
      setProduct(data);
    };
    fetchData();
  }, []);

  return (
    <Box>
      {selectedProduct ? (
        <Detail selectedProduct={selectedProduct}/>
      ) : (
        <Container maxW="1000px">
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={6}
            p="5px"
            justifyContent="center"
            alignItems="center"
          >
            {product.map((data) => (
              <Card maxW="sm" cursor="pointer" key={data.productId} onClick={() => handleProductClick(data)}>
                <CardBody>
                  <Image
                    src={data.imageUrl}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                    objectFit="contain"
                    w="100%"
                    h="200px"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" noOfLines={1}>
                      {data.productName}
                    </Heading>
                    <Text noOfLines={2} align="justify">
                      {data.description}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Flex justifyContent="space-between" w="full">
                    <Text color="blue.600" fontSize="2xl">
                      $ {data.price}
                    </Text>
                    <Button
                      variant="solid"
                      colorScheme="blue"
                      onClick={() => handleProductClick(data)}
                    >
                      Detail
                    </Button>
                  </Flex>
                </CardFooter>
              </Card>
            ))}
          </Grid>{" "}
        </Container>
      )}
    </Box>
  );
}

export default Products;
