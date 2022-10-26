import '../styles/header.scss';
import React from 'react';
import Logo from '../assets/ic_logo';
import PersonIcon from '../assets/ic_person';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigator = useNavigate();
  function mainPageHandler() {
    navigator('/');
  }
  return (
    <header>
      <div className="logo" onClick={mainPageHandler}>
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
