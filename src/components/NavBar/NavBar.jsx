import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'; 
import { ChakraProvider, IconButton } from '@chakra-ui/react'
import { SearchIcon  } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList, MenuItem, Button  } from '@chakra-ui/react'

import LoginIcon from '@mui/icons-material/Login';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';

export default function NavBar({setShowCreatePost, user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <ChakraProvider>
      <nav>
      <Link to="/" onClick={() => setShowCreatePost(false)}> <CottageRoundedIcon /> Forum </Link>
      <IconButton aria-label='Search database' icon={<SearchIcon />} />
      <input type="text"></input>
      <Menu>
          
          <MenuButton as={Button} /* rightIcon={<ChevronDownIcon /> */ ><SettingsApplicationsIcon /></MenuButton>
          <MenuList>
            <MenuList><Link to ="/posts">Settings</Link></MenuList>
            <MenuItem><Link to ="/profile">Profile</Link></MenuItem>
            <MenuItem onClick={handleLogOut}><Link to="" ><LoginIcon /> Log Out</Link></MenuItem>
          </MenuList>
      </Menu>
      </nav>
    </ChakraProvider>
  );
}
