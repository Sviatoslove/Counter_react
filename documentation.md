Как устроены компоненты в React

React-компонент можно создать как обычную JavaScript-функцию:

const Post = () => {
  return <div>Post</div>;
};
Но также это можно сделать при помощи ES6 Классов(https://reactjs.org/docs/react-component.html). В данном курсе мы будем использовать функциональные компоненты (компоненты, созданные через функции), так как это более новый и наиболее удобный способ. 

Компонент может принимать в себя данные - props и выводить их (мы плотно поработаем с ними в дальнейших уроках):

const Post = (props) => {
  return <div>Post: {props.title}</div>;
};
Такой синтаксис в JavaScript, похожий на HTML, называется JSX. Если вставить этот код в обычный JavaScript-файл, то он не заработает, таких конструкций нет в языке. Чтобы он начал работать, нужна специальная Webpack-сборка с Babel. Это все может предоставить Create React App(https://create-react-app.dev) (о нем поговорим далее). Под капотом этот код конвертируется в обычный JavaScript благодаря инструменту Babel(https://babeljs.io). Протестировать конвертацию онлайн можно здесь(кликни Try it out). 

Вот так выглядит компонент Post после конвертации в обычный JavaScript:

const Post = props => {
  return React.createElement("div", null, "Post: ", props.title);
};
Согласитесь, запись через JSX выглядит намного лаконичнее.

Как мы видим, компонент на самом деле возвращает React-элемент (React.createElement()), который описывает, что мы хотим увидеть на экране. С ними уже взаимодействует React. 

Эти React-элементы можно также записывать и в обычную переменную:

const title = 'Junior Frontend Developer';
const course = <h1>Course: {title}!</h1>;
А если без JSX:

const title = 'Junior Frontend Developer';
const course = React.createElement("h1", null, "Course: ", title, "!");


Отображение в браузере

Сам React разработан таким образом, что он не зависит от браузера. За рендеринг, отрисовку React-элементов в браузере отвечает другая библиотека – React DOM(https://www.npmjs.com/package/react-dom). 

Благодаря этому, на React мы можем разрабатывать не только браузерные интерфейсы, но и, к примеру, интерфейсы для мобильных приложений. Там уже вместо React DOM будет использоваться React Native(https://www.npmjs.com/package/react-native). 

Таким образом React отвечает за работу с компонентами, React-элементами и тд, а за визуализацию в различных окружениях отвечают другие библиотеки (такие как React DOM).

Вот так происходит монтирование компонента в DOM-дерево:

import React from "react";
import ReactDOM from "react-dom/client";

const Post = (props) => {
	
return <div>Post: {props.title}</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Post title={'Hello World'} />);
В элемент по селектору #root произойдет вставка <div>Post: Hello World</div>.


Create React App(https://create-react-app.dev)

Create React App – официальный инструмент для создания single-page React-приложений. Он предоставляет готовую, актуальную сборку проекта (со всеми нужными зависимостями и конфигурацией Webpack). Чтобы создать новый проект, необходимо выполнить команду:

npx create-react-app my-app

Примечание: для работы необходимо установить Node.js, рекомендуем версию LTS: https://nodejs.org/en/

Подробнее об инструменте npx: https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b.

После того, как проект сгенерирован, создастся папка my-app и в ней будет весь код приложения. Её необходимо открыть в редакторе кода. 

Для запуска приложения нужно выполнить команду:

npm start


Файловая структура

После генерации приложения появится следующая структура(https://create-react-app.dev/docs/folder-structure/). Не переживай, если тебе что-то будет не до конца понятно. Мы будем работать с этим на протяжении всего модуля. На данном этапе у тебя должно сложиться совсем примерное представление о том, для чего нужен тот или иной файл / папка. 

node_modules

Папка(https://docs.npmjs.com/cli/v8/configuring-npm/folders#node-modules) со всеми зависимостями приложения. 

public

Папка с общедоступными файлами(https://create-react-app.dev/docs/using-the-public-folder/), можем получить к ним доступ по URL (например, https://localhost:3000/favicon.ico). Здесь содержатся:

favicon.ico – иконка(https://developer.mozilla.org/en-US/docs/Glossary/Favicon) на вкладке браузера.
manifest.json – файл манифест(https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json), представляющий информацию о приложении. Подробнее о манифестах для веб-приложений: https://developer.mozilla.org/en-US/docs/Web/Manifest.
robots.txt – файл с информацией(https://developer.mozilla.org/en-US/docs/Glossary/Robots.txt) для поисковых роботов. Он дает рекомендации о том, какие страницы/файлы стоит сканировать, а какие нет.
index.html – HTML-шаблон страницы.


package.json

Файл(https://docs.npmjs.com/cli/v9/configuring-npm/package-json), с метаданными о проекте. Здесь находятся:

scripts (следующие скрипты)(https://create-react-app.dev/docs/available-scripts/):
npm start – запуск приложения в режиме для разработки (также возможно запустить через npm run start, но для скрипта с таким названием run можно опустить)
npm run build – сборка приложения в production-режиме(https://create-react-app.dev/docs/running-tests/) в папку build
npm test – запуск тестирования(https://create-react-app.dev/docs/running-tests/)
npm run eject – команда, позволяющая изменить конфигурацию проекта(https://create-react-app.dev/docs/available-scripts/#npm-run-eject).

dependences (зависимости):

react– сам React(https://reactjs.org)
react-dom – пакет(https://reactjs.org/docs/react-dom.html), позволяющий React работать в браузере
react-scripts – пакет(https://www.npmjs.com/package/react-scripts), предоставляющий скрипты Create React App (такие как start, build и тд)(https://github.com/facebook/create-react-app). Например, выполнении npm start на самом деле выполняется react-scripts start. Благодаря этому, нам не нужно вручную настраивать Webpack, Babel, сервер для разработки и тд.
web-vitals – пакет(https://www.npmjs.com/package/web-vitals) с различными метриками, фиксирующими взаимодействие пользователя с веб-страницей.
Библиотеки для тестирования (Testing Library(https://testing-library.com): jest-dom(https://testing-library.com/docs/ecosystem-jest-dom/), react-testing-library(https://testing-library.com/docs/react-testing-library/intro/), user-event(https://testing-library.com/docs/user-event/intro/))
eslintConfig – настройка ESLint(https://eslint.org). Поработаем с ним в следующих уроках.
browserslist – конфигурация для поддерживаемых браузеров(https://create-react-app.dev/docs/supported-browsers-features/#configuring-supported-browsers). Благодаря нему JS-код на выходе будет совместим с указанными браузерами.
package-lock.json

Файл(https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json) с полным деревом зависимостей проекта (наши зависимости, зависимости зависимостей и тд). Генерируется автоматически при установке или изменении npm пакетов.

.gitignore

Файл(https://git-scm.com/docs/gitignore), описывающий, что должно игнорироваться системой контроля версий Git.

src

Все исходные файлы приложения (source).

index.js – входной в приложение JavaScript-файл, все начинается отсюда.
Здесь происходит монтирование корневого компонента в DOM-дерево, глобальное подключение сторонних библиотек и т.д.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Подключение Bootstrap из папки node_modules
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
Перед подключением библиотек их необходимо установить. Установка Bootstrap фиксированной версии 5.1.0:

npm i bootstrap@5.1.0
App.js – корневой компонент приложения