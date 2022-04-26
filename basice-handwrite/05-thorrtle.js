// 节流函数
// 多次点击只执行一次

// 延迟执行版
function throttle(fn, delay = 200) {
    let flag = true
    return function () {
        if (!flag) return
        flag = false
        const args = arguments
        setTimeout(() => {
            fn.apply(this, args)
            flag = true
        }, delay)
    }
}

// 立即执行版
function throttle2(fn, delay = 1000) {
    let flag = false
    let cnt = 0
    return function () {
        if (!flag) {
            return
        }
        flag = true
        const args = arguments
        if (cnt = 0) {
            fn.apply(this, args)
            flag = true
            cnt = 1
        } else {
            setTimeout(() => {
                fn.apply(this, args)
                flag = true
            }, delay)
        }
    }
}