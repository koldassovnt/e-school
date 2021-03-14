# E-School Project

Проект написан при помощи Spring Boot + ReactJs + MySQL.
Соединение Spring Boot и MySQL реализовано при помощи MyBatis.

   При переходе на страницу проекта в браузере открывает форму
аутентификации (проверку логина и пароля зашита в код).
   После авторизации открывается форма со списком учеников с кнопками "Добавить" и "Удалить".
   При нажатии на кнопку "Добавить" открывается форма добавления ученика.
   При нажатии на кнопку "Удалить", ученик удаляется из списка.


## 1. Как скачать проект с github

```bash
git clone https://github.com/koldassovnt/e-school.git
```


## 2. Установка нужных пакетов

#### 2.1 Установка npm производится с сайта [install npm](https://nodejs.org/en/download/). Там нужно будет скачать нужный установщик для вашей OS и установить.

#### 2.2 Установка нужных пакетов для ReactJS.

Заходим в папку '../e-school/e-school-react' через cmd, terminal, powershell и т.д.
И устанавливаем дополнительные пакеты:

```bash
npm install react-bootstrap bootstrap
```

```bash
npm install --save react-router-dom
```

```bash
npm install react-paginate --save
```


## 3 Настройка MySQL

#### 3.1 Создайте базу данных с именем 'e_school' (или с любым названием, но придется тогда исправить 'application.properties' на сервере).

#### 3.2 Установите 'username' как root и оставьте 'password' пустым (или используйте свои настройки MySQL аккаунта, но исправьте 'application.properties' на сервере).

#### 3.3 Установите port соединения MySQL как '3306' (или используйте свои настройки, но исправьте 'application.properties' на сервере)


 
## 4 Запуск проекта

#### 4.1 Запустите ваш сервер на MySQL (xampp или любое на ваше усмотрение).

#### 4.2 Откройте pom.xml 'КАК ПРОЕКТ' в Intellij Idea пройдя по пути '../e-school/e-school-spring/'

#### 4.3 После открытия проекта запустите его в '../e-school/e-school-spring/src/main/java/com/example/eschool/ESchoolApplication'

#### 4.4 С помощью cmd, powershell, terminal и т.д. пройдите по пути '../e-school/e-school-react' и запустите reactjs при помощи команды:

```bash
npm start
```


## 5 Просмотр проекта

#### 5.1 Проект откроется в вашем браузере по умолчанию по url: http://localhost:3000/ (Если не открылся вбиваем вручную).

#### 5.2 Чтоб пройти Логин нужно ввести:

Login: admin@admin.com
Password: admin

#### 5.3 Чтоб добавить кликаем по кнопке 'Add New +'. В появившемся окне заполняем форму и нажимаем по кнопке 'Add'.

#### 5.4 Для проверки добавление идем в конец списка (последняя страница в пагинации).

#### 5.5 Для удаления просто кликаем по кнопке 'DELETE'