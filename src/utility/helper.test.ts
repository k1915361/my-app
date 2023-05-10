import { findBiggestInt, findSmallestInt, identity, invert, numberToString, oddOrEven, reverseSeq, rowSumOddNumbers, simpleMultiplication, squareSum, sum, xo} from './helper'
import { describe, expect, it} from 'vitest'

describe('helper', () => {
    it('should add two numbers', () => {
        expect(true).toBe(true)
    })
    it('should add two numbers', () => {
        expect(sum(1, 2)).toBe(3)
    })
    it('should add a sole input', () => {
        expect(sum(5)).toBe(5)
    })
    it('should add three numbers', () => {
        expect(sum(1, 2, 3,)).toBe(6)
    })
    it('should return 0 if no numbers are passed', () => {
        expect(sum()).toBe(0)
    })
    it('should add any number of arguments', () => {
        expect(sum(1, 2, 3, 4, 5, 6)).toBe(21)
    })
    it('should multiply given odd number to 9', () => {
        expect(simpleMultiplication(1)).toBe(9)
    })
    it('should multiply given even number to 8', () => {
        expect(simpleMultiplication(2)).toBe(16)
    })
    it('should square sum 2,3 to 13', () => {
        expect(squareSum([2,3])).toBe(13)
    })
    it('should find smallest int of 2', () => {
        expect(findSmallestInt([2,3])).toBe(2)
    })
    it('should find biggest int of 3', () => {
        expect(findBiggestInt([2,3])).toBe(3)
    })
    it('should rowSumOddNumbers 2', () => {
        expect(rowSumOddNumbers(2)).toBe(8)
    })
    it('should be odd', () => {
        expect(oddOrEven([2,3])).toBe("odd")
    })
    it('should be even', () => {
        expect(oddOrEven([2,4])).toBe("even")
    })
    it('should reverse 5', () => {
        expect(reverseSeq(5)).toEqual([5,4,3,2,1])
    })
    it('should invert the number arry to negative', () => {
        expect(invert([2,3,4,5])).toEqual([-2,-3,-4,-5,])
    })
    it('should number to string', () => {
        expect(numberToString(-2)).toBe("-2")
    })
    it('should xo be true', () => {
        expect(xo('xoxo')).toBe(true)
    })
    it('should xo be false', () => {
        expect(xo('xoxoo')).toBe(false)
    })
    it('should empty xo be true', () => {
        expect(xo('')).toBe(true)
    })
    it('should none xo be true', () => {
        expect(xo('abcd')).toBe(true)
    })
    it('should length be 3', () => {
        expect('xoxo'.split('x').length).toBe(3)
    })
    it('should length be 4', () => {
        expect('xxx'.split('x').length).toBe(4)
    })
    it('should return 3 as a last item in array', () => {
        expect([1,2,3].at(-1)).toBe(3)
    })
    it('should return 3 as last item', () => {
        expect([1,2,3].last()).toBe(3)
    })
    it('should match string', () => {
        expect(typeof "str").toBe("string")
    })
    it('should match number', () => {
        expect(typeof 11).toBe("number")
    })
    it('should match number[]', () => {
        expect(typeof [1,2,3]).toEqual("object")
    })
})