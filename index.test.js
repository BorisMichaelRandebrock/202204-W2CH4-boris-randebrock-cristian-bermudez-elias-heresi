const SkylabArray = (input) => {
  const newArray = [input];
  return newArray;
};

describe("Given the class SkylabArray", () => {
  describe("When it receives 1 as parameter", () => {
    test("Then it should return the array [1]", () => {
      const inputtedNumber = 1;
      const expectedResult = [1];

      const testedResult = SkylabArray(inputtedNumber);

      expect(expectedResult).toBe(testedResult);
    });
  });
});
