import { Observable } from 'rxjs';

const $observable = new Observable(subject => {
subject.next(1);
  setTimeout(()=> {
    subject.next(2);
    subject.complete();
  }, 1000);
  });
$observable.subscribe(value => console.log(value));


 