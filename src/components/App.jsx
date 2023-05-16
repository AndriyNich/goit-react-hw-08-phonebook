import React from 'react';
import { Contacts } from './Contacts/Contacts';
import { ModalWraper } from './ModalWraper/ModalWraper';
import MainMenu from './MainMenu/MainMenu';

export const App = () => {
  return (
    <div>
      <MainMenu />
      <Contacts />
      <ModalWraper />
    </div>
  );
};
