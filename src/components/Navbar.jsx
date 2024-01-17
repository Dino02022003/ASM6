  import { Box, Flex, Text, Link } from "@chakra-ui/react";
  import { FaCartShopping } from "react-icons/fa6";
  import { Link as reactRouterLink, useLocation} from "react-router-dom";

  function Navbar() {
  //   const location = useLocation();
  // const NavItem = ({ link, text }) => {
  //     return (
  //         <Link
  //             px={4}
  //             as={RouterLink} to={link}
  //             fontWeight={location.pathname === link ? "800" : "500"}
  //             color={location.pathname === link ? "black" : undefined}
  //         >
  //             {text}
  //         </Link>
  //     )
  // }
    return (

      <Flex w="full" h={10} shadow="lg" fontFamily="Fira Sans" bg="#ffffff" position="Sticky" zIndex={10} top="0px">
        <Flex
          w="33%"
          justifyContent="center"
          gap={5}
          align="center"
          color="#6f7684"
          fontSize={17}
        >
          <Link to="/Home" >Home</Link>
          <Text align="center">
            <Link to="/products">Products</Link>
          </Text>
          <Text align="center">
            <Link>Reviews</Link>
          </Text>
        </Flex>

        <Flex w="33%" justifyContent="center" align="center">
          <Text align="center" fontWeight="bold" fontSize={20} color="#3f82f6">
            Beauty.hd
          </Text>
        </Flex>

        <Flex w="33%" justifyContent="flex-end" align="center" px={10}>
          <Text
            position="absolute"
            bg="red"
            color="#fff"
            w={5}
            h={5}
            align="center"
            borderRadius="50%"
            fontSize={15}
            top={1}
            right={10}
            cursor="pointer"
          >
            1
          </Text>
          <Text color="#3d81f6" fontSize="25px" cursor="pointer">
            <FaCartShopping/>
          </Text>
        </Flex>
      </Flex>
    );
  }

  export default Navbar;


