
Проверка версии Node.JS  
```
node -v
```

Пошаговая инструкция:

1. Скачать и установить node.js (делается один раз)
```
https://nodejs.org/en/
```
2. Открыть и закрыть VS code
3. Открыть терминал
4. Скачиваем наш с вами вчера созданный проект с GitHub



Важно! если при установки nodeJS возникает ошибка доступа, то: 

1. Идём в меню 'Пуск' и пишем:

```
Windows PowerShell
```
2. нажимаем правой кнопкой мыши (и будет написано:'Запись от имени администратора') - нажимаем

3. В появившемся окне вбиваем команду (Set-ExecutionPolicy unrestricted) и нажимаем enter
```
Set-ExecutionPolicy unrestricted
```
4. Подтверждаем команду нажав английскую букву 'Y'
```
y
```

<============БОЛЬШЕ НИЧЕГО ДЕЛАТЬ НЕ НАДО============>




Если вы вчера НЕ создавали проект, то... 

1. После установки node.JS, создаём на рабочем столе папку с названием вашего проекта (лучше на английском) 

2. Заходим в File(Файл) (справа вверху) и выбираем Open Folder (открыть папку) и открываем только что созданную папку

3. Заходим в терминал и там покажется путь к папке проекта(показывается автоматически) \(название вашего проекта)> 
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

Вуаля, всё готово!

