import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    borderRadius: '4px',
    padding: '20px 0',
    //   backgroundColor: alpha(theme.palette.common.white, 0.15),
    //   '&:hover': {
    //     backgroundColor: alpha(theme.palette.common.white, 0.25),
    //   },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
    // backgroundColor: 'black'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '50%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    borderRadius: '4px',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        // transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '300px',
            //   '&:focus': {
            //     width: '20ch',
            //   },
        },
    },
    // backgroundColor: 'black'
}));


const pages = ['Movies', 'TV Shows', 'My List'];
const user = ['Hi, Guest', 'Sign In'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar
            className='appbar'
            sx={{
                width: '100%',
                position: "absolute",
                zIndex: 999,
                top: 0,
                backgroundColor: "#ffffff00",
                boxShadow: 'none',
            }}>
            <Container maxWidth="100%">
                <Toolbar disableGutters>
                    <Box
                        // noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        <img
                            src="http://www.pngall.com/wp-content/uploads/4/Netflix-Logo-HD.png"
                            role="button"
                            width="120px"
                        />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                backgroundColor: 'black'
                            }}
                        >
                            {user.map((page) => (
                                <MenuItem key={page} sx={{backgroundColor: 'black'}} onClick={handleCloseNavMenu}>
                                    <Typography color="white" textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                            {pages.map((page) => (
                                <MenuItem key={page} sx={{backgroundColor: 'black'}} onClick={handleCloseNavMenu}>
                                    <Typography color="white" textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                        <Search alignItems="center">
                            <SearchIconWrapper>
                                <SearchIcon sx={{ color: 'white' }} />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Movies, TV Shows..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                    <Box
                        // noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                        }}
                    >
                        <img
                            src="http://www.pngall.com/wp-content/uploads/4/Netflix-Logo-HD.png"
                            role="button"
                            width="120px"
                        />
                    </Box>
                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                    }}
                    >
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}
                        >
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                {pages.map((page) => (
                                    <Typography
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2,
                                            color: 'white',
                                            display: 'block',
                                            "&:hover": {
                                                color: "#678888",
                                                transition: 'all 0.5s'
                                            },
                                            fontWeight: '550',
                                            padding: '10px 12px',
                                            cursor: 'pointer',
                                            fontSize: '14px'
                                        }}
                                    >
                                        {page}

                                    </Typography>
                                ))}
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon sx={{ color: 'white' }} />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Movies, TV Shows..."
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                                {user.map((page) => (
                                    <Typography
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2,
                                            color: 'white',
                                            display: 'block',
                                            "&:hover": {
                                                color: "#678888",
                                                transition: 'all 0.5s'
                                            },
                                            fontWeight: '550',
                                            padding: '10px 12px',
                                            cursor: 'pointer',
                                            fontSize: '14px'
                                        }}
                                    >
                                        {page}
                                    </Typography>
                                ))}
                            </div>
                        </div>
                    </Box>


                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;