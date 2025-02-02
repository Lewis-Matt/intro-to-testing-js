// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for sayHello function
describe('sayHello', function () {
    it('should be defined a function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return the string "Hello, Jane" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane");
    });
    it('should return "Hello, Alex" when "Alex" is passed in as input', function() {
        expect(sayHello('Alex')).toBe("Hello, Alex");
    });
    it('should return "Hello, Pat" when "Pat" is passed in', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat");
    });
    it('should return "Hello, World" when no input is passed in', function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World" when true is passed in', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World" when false is passed in', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    // I could keep going and test for edge cases: input is null, input is '', input is number, etc.
});

// Unit tests for isFive function
describe('isFive', function (){
    it('the function should exist', function (){
        expect(isFive).toBeDefined();
    })
    it('should be a defined a function', function (){
        expect(typeof isFive).toBe('function');
    });
    it('should always return a boolean', function (){
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed 5', function (){
        expect(isFive(5)).toBe(true);
    });
    // it('input must be a number', function (){
    //     // I want to test that the user passes in a value of type number
    //     expect(isFive('5')).toBeNaN();
    // });
});
