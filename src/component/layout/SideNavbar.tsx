import React from 'react';
import { Avatar, Drawer } from '@mui/material';
import { RootState } from 'store/rootReducers';
import { useDispatch, useSelector } from 'react-redux';
import { handleSideBar } from 'store/slices/layoutSlice';
import { Box } from '@mui/system';
import { COLORS } from 'theme';
import LogoIcon from '@root/public/icons/svg/LogoIcon';
import MoonIcon from '@root/public/icons/svg/MoonIcon';

const SideNavbar = () => {
  const sideNavBarOpen = useSelector(
    (state: RootState) => state.layout.sideNavBarOpen
  );
  const dispatch = useDispatch();

  const _HandleClose = () => {
    dispatch(handleSideBar(false));
  };

  return (
    <Drawer
      anchor="left"
      open={true}
      onClose={_HandleClose}
      hideBackdrop
      sx={{
        '&.MuiDrawer-root .MuiDrawer-paper': {
          backgroundColor: COLORS.transparent[0],
          boxShadow: 'none',
        },
        width: 100,
      }}
    >
      <Box
        sx={{
          width: 100,
          height: '100%',
          backgroundColor: COLORS.primary.dark,
          display: 'flex',
          flexDirection: 'column',
          borderBottomRightRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <Box
          sx={{
            backgroundColor: COLORS.primary.main,
            height: 100,
            borderTopRightRadius: 40,
            borderBottomRightRadius: 40,
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          <Box sx={{ height: 50 }} />
          <Box
            sx={{
              backgroundColor: COLORS.primary.light,
              height: 50,
              borderTopLeftRadius: 40,
              borderBottomRightRadius: 40,
            }}
          ></Box>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translateX(-50%) translateY(-50%)',
            }}
          >
            <LogoIcon />
          </Box>
        </Box>
        <Box sx={{ flex: 1 }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
            cursor: 'pointer',
          }}
        >
          <MoonIcon />
        </Box>
        <Box sx={{ borderBottom: `1px solid #888EB0` }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
          }}
        >
          <Avatar
            src="/images/avatar/image-avatar.jpg"
            sx={{ cursor: 'pointer' }}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideNavbar;
