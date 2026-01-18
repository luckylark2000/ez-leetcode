// 2629. 复合函数。https://leetcode.cn/problems/function-composition/description/
export type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    const len = functions.length;
    if (len === 0) return x;
    let res = x;
    for (let i = len - 1; i > -1; i--) {
      res = functions[i](res);
    }
    return res;
  };
}

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9

/**
 * 优化版，使用数组的 reduceRight 方法
 * @param functions
 * @returns
 */
function compose2(functions: F[]): F {
  return function (x) {
    return functions.reduceRight((preValue, curFn) => curFn(preValue), x);
  };
}

const fn2 = compose2([(x) => x + 1, (x) => 2 * x]);
console.log(fn2(4)); // 9
