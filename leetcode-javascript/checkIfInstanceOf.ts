/**
 * 2618. 检查是否是类的对象实例
 * @param obj
 * @param classFunction
 * @returns
 */
export function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (
    obj === null ||
    obj === undefined ||
    !(classFunction instanceof Function)
  ) {
    return false;
  }
  return Object(obj) instanceof classFunction;
}

// 学习到了Object(obj)可以把基本类型转换成引用类型。比如说Object(1)就是自动转换成Number类型了
let a: number = 1;
console.log(Object(a)); //[Number: 1]
console.log((Object(a) as Number).toString() === "1"); //true
