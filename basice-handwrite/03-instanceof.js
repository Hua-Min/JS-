// instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。

function myInstanceof(father, child){
    const fp = father.prototype
    let cp = child._proto_
    while(cp){
        if(fp === cp){
            return true
        }
        cp = cp._proto_
    }
    return  false
}