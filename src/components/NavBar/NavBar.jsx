import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { ChakraProvider, IconButton } from '@chakra-ui/react'

import { ChevronDownIcon, SearchIcon  } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList, MenuItem, Button  } from '@chakra-ui/react'


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <ChakraProvider>
      <nav>
      <Link to="/"> FORUM </Link>
      <IconButton aria-label='Search database' icon={<SearchIcon />} />
      <input type="text"></input>
      <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>Profile</MenuButton>
          <MenuList>
            <MenuList><Link to ="/posts">HEY</Link></MenuList>
            <MenuItem><Link to ="/profile">Profile</Link></MenuItem>
            <MenuItem onClick={handleLogOut}><Link to="" >Log Out</Link></MenuItem>
          </MenuList>
      </Menu>
    {/* <Link to="" onClick={handleLogOut}>Log Out</Link> */}
      </nav>
    </ChakraProvider>
  );
}
