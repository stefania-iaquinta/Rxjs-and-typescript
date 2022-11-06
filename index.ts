// Import stylesheets
import { filter, fromEvent, interval, map, timer } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import './style.css';

// OPERATORI DI CREAZIONE

// of(10, 20, 30).subscribe({
//   next(val) {
//     console.log(val);
//   },
//   error(error) {
//     console.log(error);
//   },
// });

// const sub = interval(1000).subscribe(val => {console.log(val)})

// sub.unsubscribe();

//IL PRIMO PARTE DOPO 3 SECONDI, GLI ALTRI DOPO MEZZO SECONDO
// timer(3000,500)
//   .subscribe(val => console.log(val))

// document.addEventListener('click', (e) => console.log(e))

fromEvent(document.getElementById('input'), 'input')
  .pipe(
    //inserire una catena di operatori che possono anche manipolare lo strem di dati
    map((e) => (e.target as HTMLInputElement).value),
    filter((text) => text.length > 3)
  )
  .subscribe((val) => {
    console.log(val);
  });
