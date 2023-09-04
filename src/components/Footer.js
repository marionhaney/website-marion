import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        align="center"
      >
        <Text>© 2023 Marion Haney</Text>
        <Text>Created from 
        <Link  color='teal.500' href='https://github.com/eldoraboo/portable-portfolio' isExternal> template. </Link>
        </Text>
      </Container>
    </Box>
  );
}
