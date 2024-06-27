import { expect } from "chai";

describe("Stam tests suite", () => {
    describe("Test array get sorted", () => {
        it("should return sorted array", () => {
            const arr = [5, 3, 8, 1, 2];
            expect(arr.sort()).to.be.eql([1, 2, 3, 5, 8]);
        })
    })
})