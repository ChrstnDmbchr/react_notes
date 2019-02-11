import React from 'react';
import Icon from 'react-icons-kit';
import * as icons from 'react-icons-kit/ionicons';
import './customIcon.scss';

const CustomIcon = ({icon, callBack, size, classes, color}) => (
    <div className={classes ? classes : null} style={color ? {color: color} : null}>
        <Icon icon={icons[icon]} size={size} onClick={callBack}/>
    </div>
);

export default CustomIcon;