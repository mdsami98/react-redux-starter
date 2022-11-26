import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: 'primary-500'
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');

    return (
        <Box
            sx={{
                '& .pro-sidebar-inner': {
                    background: `primary[400] !important`
                },
                '& .pro-icon-wrapper': {
                    backgroundColor: 'transparent !important'
                },
                '& .pro-inner-item': {
                    padding: '5px 35px 5px 20px !important'
                },
                '& .pro-inner-item:hover': {
                    color: '#868dfb !important'
                },
                '& .pro-menu-item.active': {
                    color: '#6870fa !important'
                }
            }}
        >
            <ProSidebar
                collapsed={isCollapsed}
                sx={{ backgroundColor: '#fff !important' }}
            >
                <Menu iconShape='square'>
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: '10px 0 20px 0'
                            // color: 'primary-500'
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                ml='15px'
                            >
                                <Typography variant='h4' color='primary-500'>
                                    ADMINIS
                                </Typography>
                                <IconButton
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                    color='primary'
                                >
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                        <Item
                            title='Dashboard'
                            to='/'
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
