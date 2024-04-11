import React from 'react';
import { Icon } from '@iconify/react';

export const Menu = ({ color='white', size }) => {
    return <Icon icon="ep:menu" color={color} width={size} height={size} style={{cursor : 'pointer'}} />;
};

export const Search = ({ color='white', size }) => {
    return <Icon icon="gala:search" color={color} width={size} height={size} />;
};


export const ProfileIcon = ({ color='white', size }) => {
    return <Icon icon="healthicons:ui-user-profile" color={color} width={size} height={size} />;
};

export const DownIcon = ({ color='white', size }) => {
    return <Icon icon="gridicons:dropdown" color={color} width={size} height={size} />;
};

export const AdminIcon = ({ color='white', size }) => {
    return <Icon icon="clarity:administrator-line" color={color} width={size} height={size} />;
};

export const PimIcon = ({ color='white', size }) => {
    return <Icon icon="fluent:people-team-20-regular" color={color} width={size} height={size} />;
};

export const LeftIcon = ({ color='white', size }) => {
    return <Icon icon="mingcute:left-fill" color="white" width={25} height={25} />;
}








