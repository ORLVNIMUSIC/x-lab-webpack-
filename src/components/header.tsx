import '../styles/header.scss';
import React from 'react';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <object data="./src/assets/ic_logo.svg" type="image/svg+xml" />
        <span>Wrench CRM</span>
      </div>
      <div className="rightSide">
        <object data="./src/assets/ic_person.svg" type="image/svg+xml" />
        <span>Имя Фамилия</span>
      </div>
    </header>
  );
}
