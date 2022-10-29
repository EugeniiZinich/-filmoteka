// Імпорти _________________________________________________________
import storage from "./locale-storage-methods";
import {filmData} from './modal-film'
import {id} from './modal-film'
import {buttonTextWatched} from './modal-film'
import {buttonTextQueue} from './modal-film'
// Змінні ___________________________
let watchVideoList = [];
let queueVideoList = [];
export const WACHED_KEY = "watchedVideoKey"
export const QUEUE_KEY = "queueVideoKey"


// Функція додає відео у lacalestorage або видаляє якщо відео вже є
export function onButtonAddToList(storageKey, videoList, event, data) {
 const savedData = storage.load(storageKey)

// перевіряємо чи є щось у localestorage
 if (savedData) {
  // записуємо у пустий масив все з localestorage
  videoList = savedData;

  // Коли відео додане у localstorage повторний клік по кнопці повинен видалити фільм із localestorage
  for (let i = 0; i < savedData.length; i += 1) {

   // якщо поточне відео id співпадає із тим що є в масиві,то з масиву потрібно видалити 
   if (savedData[i].id === id) {

    // видалення об'єкта
    savedData.splice(i, 1);

    // оновлення localstorage
    storage.save(storageKey, savedData)
    buttonTextWatched(videoList,id);
    return
   };
  };
 };
 // додаємо у масив новий фільм
videoList.push(data);
// записуємо масивз новим фільмом у localestorage 
storage.save(storageKey, videoList);
  buttonTextWatched(videoList,id);

 };

export function onAddToList(e) {

 if (e.target.closest('.film-card-addToWatched')) {
  console.log('push button add to watched');
  // console.log(filmData);

  // ✅Кнопка add to watch додає фільм у localestorage і видаляє якщо він там вже є
  onButtonAddToList(WACHED_KEY, watchVideoList, e, filmData[0]);
  
  
  // ✅Кнопка add to queue додає фільм у localestorage і видаляє якщо він там вже є
 } else if (e.target.closest('.film-card-addToQueue')) {
    console.log('push button add to queue');

  onButtonAddToList(QUEUE_KEY, queueVideoList, e, filmData[0]);
 }
}