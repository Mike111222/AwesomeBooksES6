import BookLibrary from './modules/bookLibrary.js';
import showDate from './modules/dateModule.js';

const bookLibrary = new BookLibrary();
bookLibrary.initialize();
showDate();
