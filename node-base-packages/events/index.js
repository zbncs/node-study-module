const EventEmitter = require('events');

const emitter = new EventEmitter()

// on
// addListener
const listener = (arg) => {
    console.log(999, arg)
}
// 监听事件
emitter.on('click', listener)

setTimeout(() => {
    // 触发事件
    emitter.emit('click', [1, 2, 3]);
    // 取消事件
    emitter.off('click', listener);
    emitter.emit('click', [4, 5, 6]);
}, 2000)


// 获取事件名

emitter.eventNames();

// 获取事件个数

emitter.listenerCount('click')

// 监听一次

emitter.once('click', listener)

// 移除所有的监听器

emitter.removeAllListeners()









