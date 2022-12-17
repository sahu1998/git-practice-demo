import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    borderRadius: '4px',

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
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
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

const typoStyle = {
    fontSize: '14px', fontWeight: 'bold', flexGrow: 1, display: { xs: 'none', sm: 'block' }
}

export default function SearchAppBar() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            position: "absolute",
            zIndex: 999,
            top: 0,
            padding: "16px"
        }}>
            <div style={{ display: 'flex', width: '28%' }}>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    <img
                        src="http://www.pngall.com/wp-content/uploads/4/Netflix-Logo-HD.png"
                        role="button"
                        width="120px"
                    />
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={typoStyle}
                >
                    Movies
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={typoStyle}
                >
                    TV Shows
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={typoStyle}
                >
                    My List
                </Typography></div>
            <div style={{ display: 'flex', width: '28%' }}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon sx={{ color: 'white' }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Movies, TV Shows..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>

                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={typoStyle}
                >
                    Hi, Guest
                </Typography>

                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={typoStyle}
                >
                    Sign In
                </Typography>
            </div>
        </div>
    );
}