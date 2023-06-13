// module.exports.INCORRECT_DATA_CREATE_MOVIES = 'Переданы некорректные данные при создании фильма';
// module.exports.MOVIE_NOT_FOUND = 'Фильм с указанным _id не найден';
// module.exports.NOT_ENOUGH_RIGHTS = 'Недостаточно прав';
// module.exports.USER_NOT_FOUND = 'Пользователь не найден';
// module.exports.EMAIL_ALREADY_REGISTERED = 'Пользователь с таким email уже зарегестрирован';
// module.exports.INCORRECT_DATA_UPDATE_USER_INFO = 'Переданы некорректные данные при обновлении профиля';
// module.exports.INCORRECT_DATA_CREATE_USER = 'Переданы некорректные данные при создании пользователя';
// module.exports.INVALID_TOKEN = 'Некорректный токен';
// module.exports.ERROR_ON_THE_SERVER = 'На сервере произошла ошибка';
// module.exports.REQUESTED_ADDRESS_NOT_FOUND = 'Запрашиваемый адрес не найден';
// module.exports.INCORRECT_EMAIL_OR_PASSWORD = 'Неправильная почта или пароль';
// module.exports.INCORRECT_EMAIL = 'Email некорректный';
// module.exports.INCORRECT_LINK = 'Ссылка некорректная';
// module.exports.TOKEN_LIFETIME = '7d';
// module.exports.URL_PATTERN = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;


const INCORRECT_EMAIL_OR_PASSWORD = 'Неправильная почта или пароль';
const ERROR_ON_THE_SERVER = 'На сервере произошла ошибка';
const INCORRECT_DATA_CREATE_USER = 'Переданы некорректные данные при создании пользователя';

export const LOGIN_ERRORS_OBJ = {
  '401': INCORRECT_EMAIL_OR_PASSWORD,
  '400': INCORRECT_DATA_CREATE_USER,
  '500': ERROR_ON_THE_SERVER
}

export const DEFAULT_ERROR = "Что-то пошло не так"
