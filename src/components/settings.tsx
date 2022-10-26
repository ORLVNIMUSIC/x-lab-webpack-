import React from 'react';
import FinanceIcon from '../assets/funanceIcon';
import ProfileIcon from '../assets/profileIcon';

export default function Settings() {
  return (
    <>
      <div className="menuItem subMenu">
        <ProfileIcon />
        <span>Настройки профиля</span>
      </div>
      <div className="menuItem subMenu">
        <FinanceIcon />
        <span>Управление финансами</span>
      </div>
    </>
  );
}
