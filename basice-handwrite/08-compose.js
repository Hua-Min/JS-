//组合函数

const compose = (...fns) => {
    const len = fns.length
    if (len === 0) return (num) => num
    if (len === 1) return fns[0]
    return fns.reduce((pre, next) => {
        return (num) => {
            return next(pre(num))
        }
    })
}



function fn1(x) {
    console.log(x);
    return x + 1;
}

function fn2(x) {
    console.log(x);
    return x + 2;
}

function fn3(x) {
    console.log(x);
    return x + 3;
}

function fn4(x) {
    console.log(x);
    return x + 4;
}

const a = compose(fn1, fn2, fn3, fn4);

console.log(a)
console.log(a(1)); 