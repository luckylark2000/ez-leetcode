// 2627. 函数防抖。https://leetcode.cn/problems/debounce/description/

export type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
  let timer: null | ReturnType<typeof setTimeout> = null;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, t);
  };
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
const log = debounce(console.log, 2000);
log(666); // cancelled
log(777); // cancelled
log(888); // Logged at t=100ms

//--------------------------------
// 类型友好版
export type U<T extends any[]> = (...args: T) => void;

function debounce2<T extends any[]>(fn: U<T>, t: number): U<T> {
  let timer: null | ReturnType<typeof setTimeout> = null;

  return function (...args: T) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, t);
  };
}

const log2 = debounce2(console.log, 2000);
log2("Hello"); // cancelled
log2("Hello"); // cancelled
log2("Hello"); // Logged at t=100ms
