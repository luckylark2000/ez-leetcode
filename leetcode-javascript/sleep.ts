// 2621，睡眠函数。https://leetcode.cn/problems/sleep/description/

async function sleep(millis: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
