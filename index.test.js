class SkylabArray {
  constructor(...theArgs) {
    this.myArray = theArgs;
  }

  myArrayLenght() {
    let myCount = 0;
    for (this.Object in this.myArray) {
      if (this.myArray) {
        myCount += 1;
      }
    }
    return myCount;
  }
}

describe("Given the class SkylabArray", () => {
  describe("When it receives the arguments 3, 8, 10, 2 to create the Object numbers", () => {
    test("Then it's method myArrayLenght should return 4", () => {
      const numbers = new SkylabArray(3, 8, 10, 2);
      const expectedLength = 4;

      const ArrayLenghtResult = numbers.myArrayLenght();

      expect(ArrayLenghtResult).toBe(expectedLength);
    });
  });

  describe("When it receives the arguments 'Marta', 'Luis', 'Pere' to create the Object names", () => {
    test("Then it's method myArrayLenght should return 3", () => {
      const names = new SkylabArray("Marta", "Luis", "Pere");
      const expectedLength = 3;

      const ArrayLenghtResult = names.myArrayLenght();

      expect(ArrayLenghtResult).toBe(expectedLength);
    });
  });
});
