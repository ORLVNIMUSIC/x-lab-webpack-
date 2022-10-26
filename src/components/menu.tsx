import '../styles/menu.scss';
import React, { useState } from 'react';
import ExitIcon from '../assets/exit';
import SettingsIcon from '../assets/settings';
import VidgetsIcon from '../assets/vidgets';
import MapsIcon from '../assets/map';
import CalendarIcon from '../assets/calendar';
import TablesIcon from '../assets/vs_tables';
import AddressIcon from '../assets/ic_address';
import MainIcon from '../assets/main';
import SettingsArrow from '../assets/settingsArrow';
import Settings from './settings';

export default function Menu() {
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  function settingsHandler() {
    setIsSettingsOpen((prev) => !prev);
  }

  return (
    <menu className="menu">
      <span>Меню</span>
      <div className="items">
        <div className="menuItem">
          <MainIcon />
          <span>Главная</span>
        </div>
        <div className="menuItem">
          <AddressIcon />
          <span>Поиск адресов</span>
        </div>
        <div className="menuItem">
          <TablesIcon />
          <span>Таблицы</span>
        </div>
        <div className="menuItem">
          <CalendarIcon />
          <span>Календарь</span>
        </div>
        <div className="menuItem">
          <MapsIcon />
          <span>Карты</span>
        </div>
        <div className="menuItem">
          <VidgetsIcon />
          <span>Виджеты</span>
        </div>
        <div className="menuItem" onClick={settingsHandler}>
          <SettingsIcon />
          <span>Настройки</span>
          <SettingsArrow flipped={!isSettingsOpen} />
        </div>
        {isSettingsOpen ? <Settings /> : <></>}
        <div className="menuItem">
          <ExitIcon />
          <span>Выход</span>
        </div>
      </div>
    </menu>
  );
}
