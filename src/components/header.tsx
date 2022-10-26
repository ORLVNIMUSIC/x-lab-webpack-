import '../styles/header.scss';
import React from 'react';
import Logo from '../assets/ic_logo';
import PersonIcon from '../assets/ic_person';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Logo />
        <span>Wrench CRM</span>
      </div>
      <div className="rightSide">
        <PersonIcon />
        <span>Имя Фамилия</span>
      </div>
    </header>
  );
}
