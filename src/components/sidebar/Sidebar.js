import React, { useState } from 'react';
import sidebarTree from '../../sidebarTree.json';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './sidebar.css'
import { FaChartArea } from "react-icons/fa";


const menuStyle = { backgroundColor: '#060726' };

function Sidebars(props) {
    const handleCheckboxChange = (event, menuItem) => {
        if (event.target.checked) {
            props.setCheckedItems([...props.checkedItems, menuItem]);
        } else {
            let filterItems = props.checkedItems.filter(i => i.key !== menuItem.key);
            props.setCheckedItems(filterItems);
        }
    };

    const checkbox = (node) => <input type="checkbox" onChange={(event) => handleCheckboxChange(event, node)} />;

    const renderMenuItems = (menuItems) => {
        return menuItems.map((menuItem) => {
            const { key, label, url, nodes } = menuItem;
            if (nodes && nodes.length > 0) {
                return (
                    <SubMenu rootStyles={menuStyle} key={key} label={label} prefix={checkbox({ key: key, label: label, url: url })}>
                        {renderMenuItems(nodes)}
                    </SubMenu>
                );
            }
            return (
                <MenuItem rootStyles={menuStyle} key={key} prefix={checkbox({ key: key, label: label, url: url })}>
                    {label}
                </MenuItem>
            );
        });
    };

    return <Sidebar backgroundColor='#060726'>
        <div className='side-bar-header'><FaChartArea />  Statistics</div>
        <Menu backgroundColor='#060726' iconShape="square">{renderMenuItems(sidebarTree)}</Menu>
    </Sidebar>
}
export default Sidebars;
