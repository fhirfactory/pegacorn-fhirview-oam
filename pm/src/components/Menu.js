import * as React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { MenuItemLink } from 'react-admin';
import DefaultIcon from '@material-ui/icons/ViewList';

const Menu = ({ onMenuClick, logout }) => {
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const open = useSelector(state => state.admin.ui.sidebarOpen);

    const menuItems = [
        {name: 'PetasosTaskSummary', label: 'Task Summary'}
    ]

    return (
        <div style={{marginTop: '1.5em'}}>
            {menuItems.map(menuItem => (
                <MenuItemLink
                    key={menuItem.name}
                    to={`/${menuItem.name}`}
                    primaryText={menuItem.label}
                    leftIcon={
                        menuItem.icon ? <menuItem.icon /> : <DefaultIcon />
                    }
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                />

            ))}
            {isXSmall && logout}
        </div>
    );
};

export default Menu;