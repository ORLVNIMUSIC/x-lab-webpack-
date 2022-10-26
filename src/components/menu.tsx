import '../styles/menu.scss';
import React from 'react';

export default function Menu() {
  return (
    <menu className="menu">
      <span>Меню</span>
      <div className="items">
        <div className="menuItem">
          <object data="./src/assets/ic_главная.svg" type="image/svg+xml" />
          <span>Главная</span>
        </div>
        <div className="menuItem">
          <object data="./src/assets/ic_address.svg" type="image/svg+xml" />
          <span>Поиск адресов</span>
        </div>
        <div className="menuItem">
          <object data="./src/assets/vs_tables.svg" type="image/svg+xml" />
          <span>Таблицы</span>
        </div>
        <div className="menuItem">
          <object data="./src/assets/Group 697.svg" type="image/svg+xml" />
          <span>Календарь</span>
        </div>
        <div className="menuItem">
          <object data="./src/assets/Group.svg" type="image/svg+xml" />
          <span>Карты</span>
        </div>
        <div className="menuItem">
          <object data="./src/assets/vidgets.svg" type="image/svg+xml" />
          <span>Виджеты</span>
        </div>
        <div className="menuItem">
          <object data="./src/assets/settings.svg" type="image/svg+xml" />
          <span>Настройки</span>
        </div>
        <div className="menuItem">
          <object data="./src/assets/exit.svg" type="image/svg+xml" />
          <span>Выход</span>
        </div>
      </div>
    </menu>
  );
}
