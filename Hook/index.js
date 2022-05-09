import React from 'react';
import ReactDOM from 'react-dom/client';
import SmartList from './SmartList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <React.Fragment>
        <SmartList />
      </React.Fragment>
  </React.StrictMode>
);


// Создайте список ul > li из 15 элементов.
// Заполните каждый цифрой он 1 до 15. 
// Добавите обработчики событий, чтобы

// при клике левой кнопкой мыши цифра в li установливалась исходя из суммы 2 соседних элементов li
// при клике праквой кнопкой мыши цифра в li устанавливалась произведению 2 соседних элементов li