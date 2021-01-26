# Выполнение тестового задания:

### Реализовать на React приложение, которое умеет показывать следующие страницы:

/login - страница ввода логина и пароля (недоступная с авторизацией)
/today - страница с животными, у которых есть назначения на сегодня (недоступная без авторизации)
/animals - страница со всеми животными в приюте (недоступная без авторизации)

На сайте в хедере реализовать ссылки:
Сегодня (/today)
Животные (/animals)
Если пользователь кликает на страницы Сегодня и Животные, и он не “авторизован/токен закончился” - перекидывать на страницу /login

Форма входа (/login) принимает данные, введённые пользователем и отправляет на апи post запросом. Адрес запроса: "https://acits-api.herokuapp.com/api/token/". Для корректного ответа сервера, в этом запросе и последующих указать заголовок 'Content-Type': 'application/json'. Для авторизации в теле запроса должны быть такие данные:
username: 'test_user_1',
password: 'user10000'

Если введены другие данные, то с апи придёт ошибка, тогда нужно вывести сообщение:
Имя пользователя или пароль введены не верно

Если введены корректные данные, то из полученного с апи объекта достать токен (хранится под ключом "access") и сохранить его в localStorage, затем перебрасывать на страницу /today.

В дальнейшем для всех остальных запросов на сервер использовать токен из localStorage. Отправляться он должен заголовком: Authorization: 'Bearer ' + token. Также в заголовках должен отправляться номер текущего приюта (1, в нашем случае), а именно: 'current-shelter': 1

На странице "Сегодня" вывести животных с назначениями на сегодня, полученных из get запроса по адресу "https://acits-api.herokuapp.com/api/v1/prescriptions/today/". Отобразить кличку животного и тип назначения (например, "Приём у врача").
На странице "Животные" вывести всех животных из get запроса по адресу "https://acits-api.herokuapp.com/api/v1/animals/". Отобразить кличку, тип животного и подтип (породу).
Всю информацию, полученную с апи, хранить в Redux Store.
При нажатии на кличку животного на обеих страницах выше открывается модальное окно с карточкой животного. В карточке животного отобразить: кличка, рост, вес, возраст, тип, подтип.

Оформление (дизайн) — важно, чтобы соблюдался один шрифт, один и тот же набор цветов, стили написаны на scss (использовать css modules). Можно воспользоваться Bootstrap.
Код оформить на GitHub обязательно с Read.me.
