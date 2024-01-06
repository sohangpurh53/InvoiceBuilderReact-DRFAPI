import { Box, Flex, Spacer, Button, Heading, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" bg="blue.500" color="white" px={4} py={3}>
      <Flex alignItems="center">
        <Heading size="md" mr={4}>
          Invoice Builder
        </Heading>
        <Spacer />
        <Button onClick={toggleColorMode} leftIcon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}>
          Toggle {colorMode === 'dark' ? 'Light' : 'Dark'} Mode
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
