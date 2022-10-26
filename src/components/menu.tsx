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
import { useNavigate, useLocation } from 'react-router-dom';

export default function Menu() {
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const navigator = useNavigate();
  const location = useLocation();

  function settingsHandler() {
    setIsSettingsOpen((prev) => !prev);
  }

  function addressHandler() {
    navigator('/address');
  }

  function mainHandler() {
    navigator('/');
  }

  return (
    <menu className="menu">
      <span>Меню</span>
      <div className="items">
        <div className="menuItem" onClick={mainHandler}>
          <MainIcon />
          <span>Главная</span>
          {location.pathname === '/' ? <div className="routePointer" /> : <></>}
        </div>
        <div className="menuItem" onClick={addressHandler}>
          <AddressIcon />
          <span>Поиск адресов</span>
          {location.pathname === '/address' ? (
            <div className="routePointer" />
          ) : (
            <></>
          )}
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
