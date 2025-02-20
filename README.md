
Проверка версии Node.JS  
```
node -v
```

<h2> Пошаговая инструкция по установке Node.js </h2>

1. Скачать с сайта и установить node.js (делается один единственный раз), сайт:
```
https://nodejs.org/en/
```
2. Закрыть и открыть VS code
3. Открыть терминал
4. Скачиваем свой проект с GitHub


<h4>Важно! если при установки nodeJS возникает ошибка доступа, то:</h4> 

1. Идём в меню 'Пуск' и пишем:

```
Windows PowerShell
```
2. Нажимаем на надпись 'Windows PowerShell' правой кнопкой мыши (и будет написано:'Запись от имени администратора') - нажимаем левой кнопкой мыши

3. В появившемся окне вбиваем команду (Set-ExecutionPolicy unrestricted) и нажимаем enter
```
Set-ExecutionPolicy unrestricted
```
4. Подтверждаем команду нажав английскую букву 'Y'
```
y
```

<============БОЛЬШЕ НИЧЕГО ДЕЛАТЬ НЕ НАДО============>




<h2> Создание нового проекта</h2> 

1. После установки node.JS, создаём на рабочем столе папку с названием вашего проекта (лучше на английском) 

2. Заходим в File(Файл) (справа вверху) и выбираем Open Folder (открыть папку) и открываем только что созданную папку

3. Заходим в терминал и там автоматически покажется путь к папке проекта\(название вашего проекта)> 
4. Пишем 'cd..'(чтобы удалилось название проекта)
```
cd..
```

5. Затем пишем
```
npm create vite
```

6. Дальше появляется сообщение: 'Ok to proceed?' - пишем английскую 'y'

Project name: пишем название вашего проекта(как на верху) 

Package name: » (оставляем название как есть)

выбираем Vanilla -> Typescript

7. Если все правильно, то выйдет окно:
Done. Now run:

  cd  
  npm install
  npm run dev

  8. Пишем снова название вашего проекта, но БЕЗ заглавных букв
  ```
  cd (название проекта БЕЗ заглавных букв)
  ```
  
  9. Вбиваем команду
  ```
  npm install
  ```

  10. Вбиваем команду
  ```
  npm run dev
  ```

Вуаля, новый проект готов!


<h2> Если вы выключили компьютер(закрыли VScode), то для запуска проекта в терминале мы повторно пишем команды:</h2>

```
npm install
```
нажимаем enter

```
npm run dev
```

снова нажимаем enter
