function map(transform) {
  // the observable always will subscribe then  call next and transform the source
  return function(source){
      return new Observable(sub =>{
          sub.next(transform(source));
      });
  }
}