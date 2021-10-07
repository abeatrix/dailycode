function interval(period) {
    // your code here
    return new Observable((subscriber) => {
        let counter = 0;
        setInterval(() => {
            subscriber.next(counter);
            counter++;
        }, period);
    });
}