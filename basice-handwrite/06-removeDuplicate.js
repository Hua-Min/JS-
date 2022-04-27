// 数组去重

const removeDuplicate = (arr) => {
    const newArr = []
    arr.reduce((pre, next) => {
        if (!pre.has(next)) {
            pre.set(next, 1)
            newArr.push(next)
        }
        return pre
    }, new Map())
    return newArr
}


const removeDuplicate2 = (arr) => {
  return [...new Set(arr)]
}

//测试
const arr = [1, 2, 3, 3, 4, 4, 5, 5]
console.log(removeDuplicate(arr));
console.log(removeDuplicate2(arr));