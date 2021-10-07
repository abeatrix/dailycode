
/**
 * @param {HTMLElement} element
 * @param {string} eventName
 * @param {boolean} capture
 * @return {Observable}
 */
function fromEvent(element, eventName, capture = false) {
  return new Observable(sub => {
      const handler = (e) => sub.next(e);
      element.addEventListener(eventName, handler, capture);
      this.sub = () => {
      element.removeEventListener(eventName, handler, capture);
      };
  })    
}