var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
  console.log('调用监听器1');
} 

var listener2 = function listener2(){
  console.log('调用监听器2');
  eventEmitter.emit('data');
}

eventEmitter.on('data',function(){
  console.log('绑定函数');
}); 

eventEmitter.addListener('connection',listener1);
eventEmitter.addListener('connection',listener2);

var eventsListeners = eventsEmitter.listenerCount('connection');
console.log(eventsListeners+' 个监听器');

eventsEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);
console.log('listener1监听器移除');

eventEmitter.emit('connection');

eventsListeners = eventEmitter.listenerCount('connection');
console.log(eventsListeners+' 个监听器')

console.log('程序执行完毕')
