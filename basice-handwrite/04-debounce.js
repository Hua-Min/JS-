// 防抖函数
// 单位时间内多次点击只执行一次

// 延迟执行版
function debounce(fn, delay) {
    let timer
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        const args = arguments
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

// 立即执行版
function debounce2(fn, delay) {
    let timer
    let cnt = 0
    return function () {
        const args = arguments
        if (timer) {
            clearTimeout(timer)
        }
        if (cnt === 0) {
            fn.apply(this, args)
            cnt = 1
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args)
                cnt = 1
            }, delay)
        }
    }
}