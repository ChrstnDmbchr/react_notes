import React from 'react';
import Icon from 'react-icons-kit';
import * as icons from 'react-icons-kit/ionicons';

const SideBarItem = ({icon, callBack, size, classes}) => (
    <div className={classes}>
        <Icon icon={icons[icon]} size={size} onClick={callBack}/>
    </div>
);

export default SideBarItem;