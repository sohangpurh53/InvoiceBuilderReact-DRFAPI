import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" bg="blue.500" color="white" py={6}>
      <Flex justify="center" align="center" direction="column">
        <Text fontSize="sm" mb={2}>
          © 2024 Your Company. All rights reserved.
        </Text>
        <Flex>
          <Link href="#" color="white" mx={2}>
            Terms of Service
          </Link>
          <Text color="white">|</Text>
          <Link href="#" color="white" mx={2}>
            Privacy Policy
          </Link>
          <Text color="white">|</Text>
          <Link href="#" color="white" mx={2}>
            Contact Us
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
