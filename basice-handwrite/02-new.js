// new 关键字会进行如下的操作：
// 创建一个空的简单JavaScript对象（即{}）；
// 为步骤1新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
// 将步骤1新创建的对象作为this的上下文 ；
// 如果该函数没有返回对象，则返回this。

function myNew(fn, args){
    const obj = {};
    obj.__proto__ = fn.prototype
    let ret = fn.apply(obj,args); // 判断构造函数是否存在返回值
    return typeof ret === 'object'? ret : obj;
}
