const INCORRECT_EMAIL_OR_PASSWORD = 'Неправильная почта или пароль';
const ERROR_ON_THE_SERVER = 'На сервере произошла ошибка';
const INCORRECT_DATA_CREATE_USER = 'Переданы некорректные данные при создании пользователя';
const INCORRECT_DATA_AUTH_USER = 'Переданы некорректные данные';
const EMAIL_ALREADY_REGISTERED = 'Пользователь с таким email уже зарегестрирован';

export const SAVED_MOVIES_NOT_DATA = 'Сохраненных фильмов нет';
export const SERVER_MOVIES_ERROR = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
export const MOVIES_NOT_DATA = 'Ничего не найдено'
export const ENTER_VALUE_IN_SEARCH = 'Введите запрос в поле поиска'

export const LOGIN_ERRORS_OBJ = {
  '401': INCORRECT_EMAIL_OR_PASSWORD,
  '400': INCORRECT_DATA_AUTH_USER,
  '500': ERROR_ON_THE_SERVER
}

export const REGISTER_ERRORS_OBJ = {
  '409': EMAIL_ALREADY_REGISTERED,
  '400': INCORRECT_DATA_CREATE_USER,
  '500': ERROR_ON_THE_SERVER
}

export const EDIT_PROFILE_ERRORS_OBJ = {
  '409': EMAIL_ALREADY_REGISTERED,
  '400': INCORRECT_DATA_AUTH_USER,
  '500': ERROR_ON_THE_SERVER
}

export const DEFAULT_ERROR = "Что-то пошло не так"
