const mySetTimeout = (fn, delay) => {
    let timer = null
    const interval = () => {
        fn()
        timer = setTimeout(fn, delay)
    }
    interval()
    return {
        cancel: () => {
            clearTimeout(timer)
        }
    }
}

const mySetInterval = (fn, delay) => {
    const timer = setInterval(()=> {
        fn()
        clearInterval(timer)
    }, delay) 
}