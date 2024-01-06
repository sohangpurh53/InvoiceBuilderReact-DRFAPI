import { useState } from 'react';
import {
  Box,
  Flex,
  Spacer,
  Button,
  Heading,
  useColorMode,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Link,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box as="header" bg="blue.500" color="white" px={4} py={3}>
      <Flex alignItems="center" mr={5}>
        <Heading size="md" mr={4}>
          Invoice Builder
        </Heading>
        <Spacer />
        <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Stack direction="row" spacing={4}>
            <Link href="#" color="white">
              Home
            </Link>
            <Link href="#" color="white">
              Invoices
            </Link>
            <Link href="#" color="white">
              Settings
            </Link>
          </Stack>
          <Button ml={5} onClick={toggleColorMode} leftIcon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}>
            Toggle {colorMode === 'dark' ? 'Light' : 'Dark'} Mode
          </Button>
        </Flex>
        <IconButton
          aria-label="Menu"
          icon={<HamburgerIcon />}
          display={{ base: 'flex', md: 'none' }}
          onClick={toggleDrawer}
          variant="outline"
          // colorScheme="whiteAlpha"
        />
      </Flex>

      <Drawer  placement="right" onClose={toggleDrawer} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <Link href="#" color="blue.500">
                Home
              </Link>
              <Link href="#" color="blue.500">
                Invoices
              </Link>
              <Link href="#" color="blue.500">
                Settings
              </Link>
            </Stack>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Button display={{lg:'none', md:'block'}} onClick={toggleColorMode} leftIcon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}>
             {colorMode === 'dark' ? 'Light' : 'Dark'}
          </Button>
    </Box>
  );
};

export default Header;
