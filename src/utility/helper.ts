import { JSX } from "solid-js/jsx-runtime";

export const simpleMultiplication = (num: number): number =>
    num * (num % 2 === 0 ? 8 : 9);

export const squareSum = (numbers: number[]): number =>
    numbers.reduce((a, c) => a + c * c, 0)

export const findSmallestInt = (args: number[]): number =>
    Math.min(...args)

export const findBiggestInt = (args: number[]): number =>
    Math.max(...args)

export const invert = (array: number[]): number[] =>
    array.map(x => -x);

export const rowSumOddNumbers = (n: number): number =>
    n * n * n

export const oddOrEven = (array: number[]): string =>
    array.reduce((a, x) => a + x, 0) % 2 === 0 ? "even" : "odd"

export const reverseSeq = (n: number): number[] =>
    Array.from({ length: n }, (_, i) => n - i);

export const numberToString = (num: number): string => num + '';

export const xo = (str: string): boolean =>
    str.replace(/x/gi, '').length ===
    str.replace(/o/gi, '').length;

export const sum = (...nums: any[]): number =>
    nums.reduce((a, c) => a + c, 0)

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
    Array.from({ length: y - x + 1 }, (_, i) => x + i);

export function valueOrDefault<T>(value: T | undefined, defaultValue: T) {
    return typeof value === 'undefined' ? defaultValue : value;
}

export function isFileType(file, type) {
    return file.type.match(type)
}

export const values = (o) => Object.values(o)

export function handleFiles(images, newFiles, type = 'image',setImages =(e)=>'') {
    let result = []; 
    for (let i = 0; i < newFiles.length; i++) {
        let file = newFiles[i]; console.log('for in', file) 
        if (!isFileType(file,type)) continue;
    
        if (images.every(i => i.name !== file.name)){
            result.push(file) 
        }
    } console.log(images, newFiles, result)
    if (result === []) return images
    setImages([...images, ...result])
    return result
} 

export const deleteOne = (ls, index) =>
    ls.filter((_, i) => i !== index)

export const toUrl = (img) => 
    URL.createObjectURL(img)

export const intersection = (arr1, arr2) => 
    arr1.filter(x => arr2.includes(x));