import { AppBar,  IconButton, Stack, Toolbar, Typography } from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export const Navbar = ()=>{
    return (
        <AppBar position="fixed" color='secondary'>
            <Toolbar sx={{display : 'flex',  justifyContent: 'space-between' }}>
                <Stack direction='row' spacing={1} alignItems="center">
                    <IconButton size="small" edge="start" color="inherit">
                            <MenuOpenIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div">
                        Nade Cans
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={0.3}>
                     <IconButton size="large" color="inherit" edge='start'><NotificationsIcon /></IconButton>
                     <IconButton size="large" color="inherit" edge='start'><AccountCircleIcon  /></IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}