// 维基百科：柯里化，英语：Currying(果然是满满的英译中的既视感)，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术


const currying = (fn, ...args) => {
    const len = fn.length
    let allArgs = [...args]
    const res = (...args2) => {
        allArgs = [...allArgs, ...args2]
        if (allArgs.length === len) {
            return fn(...allArgs)
        } else {
            return res
        }
    }
    return res

}
// 测试：
const add = (a, b, c) => {
    return a + b + c
};
const a = currying(add, 1);
console.log(a(2, 3))
console.log(a(2)(3))
