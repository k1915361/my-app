export const simpleMultiplication = (num: number): number =>
    num * (num % 2 === 0 ? 8 : 9);

export const squareSum = (numbers: number[]): number =>
    numbers.reduce((a,c) => a + c * c, 0)

export const findSmallestInt = (args: number[]): number =>
    Math.min(...args)

export const findBiggestInt = (args: number[]): number =>
    Math.max(...args)

export const invert = (array: number[]): number[] => 
    array.map(x => -x);

export const rowSumOddNumbers = (n: number): number =>
    n * n * n

export const oddOrEven = (array: number[]): string =>
  array.reduce((a,x) => a+x, 0) % 2 === 0 ? "even" : "odd"

export const reverseSeq = (n: number): number[] => 
    Array.from({length:n},(_,i)=>n-i);

export const numberToString = (num: number): string => num + '';

export const xo = (str: string) : boolean =>
    str.replace(/x/gi, '').length === 
    str.replace(/o/gi, '').length;

export const sum = (...nums: any[]):number => 
    nums.reduce((a,c) => a + c, 0)

declare global {
    interface Array<T> {
        last(): T | undefined;
    }
}
  
if (!Array.prototype.last) {
    Array.prototype.last = function () {
        if (!this.length) {
            return undefined;
        }
        return this.at(-1);
    };
}

export const tgl = (val: string, opt: string) => {
    let opts = opt.split('|')
    let a = opts[0]
    let b = opts[1]
    return val === a ? b : a;
}

export const elseNull = (val: any, val2: any) => 
    val === val2 ? null : val2;

export const numbersfrom = (x: number, y: number): number[] => 
    Array.from({length: y - x + 1}, (_, i) => x + i);