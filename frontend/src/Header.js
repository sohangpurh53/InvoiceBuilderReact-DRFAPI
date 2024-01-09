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
import { useAuth } from './components/context/AuthContext';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  const {accessToken} = useAuth()

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box as="header" bg="blue.500" color="white" px={4} py={3}>
      <Flex alignItems="center" mr={5}>
        <Heading size="md" mr={4}>
          <Link _hover={{textDecoration:'none'}} href='/'>
          Invoice Builder
          </Link>
          
        </Heading>
        <Spacer />
        <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Stack direction="row" spacing={4}>
            {accessToken? <Button as={Link} href="/signout/"_hover={{bg:'green.600', textDecoration:'none'}} bg={'green.300'} color="white">
              Signout
            </Button>: <Button as={Link} href="/signin/" _hover={{bg:'blue.600', textDecoration:'none'}} bg={'blue.300'} color="white">
              SignIn
            </Button>}
            

            <Link href="/" color="white">
              Home
            </Link>
            <Link href="/invoice/all/" color="white">
              Invoices
            </Link>
          
          </Stack>
          <Button ml={5} onClick={toggleColorMode} leftIcon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}>
            {colorMode === 'dark' ? 'Light' : 'Dark'} Mode
          </Button>
        </Flex>
        <IconButton
        mt={3}
          aria-label="Menu"
          icon={<HamburgerIcon />}
          display={{ base: 'flex', md: 'none' }}
          onClick={toggleDrawer}
          variant="outline"
          color={'white'}
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
              <Link href="/" color="blue.500">
                Home
              </Link>
              <Link href="/invoice/all/" color="blue.500">
                Invoices
              </Link>
              
              {accessToken? <Button as={Link} href="/signout/"_hover={{bg:'green.600', textDecoration:'none'}} bg={'green.300'} color="white">
              Signout
            </Button>: <Button as={Link} href="/signin/" _hover={{bg:'cyan.600', textDecoration:'none'}} bg={'cyan.300'} color="white">
              SignIn
            </Button>}
            </Stack>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Button  display={{lg:'none', md:'block'}} onClick={toggleColorMode} leftIcon={colorMode === 'dark' ? <SunIcon  /> : <MoonIcon />}>
             {colorMode === 'dark' ? 'Light' : 'Dark'}
          </Button>
    </Box>
  );
};

export default Header;
