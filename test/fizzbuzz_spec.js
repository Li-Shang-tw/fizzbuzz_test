var should = chai.should()
describe('function fizzBuzz', function () {
  it('should  return fizz when number can be divisibled by 3  ', function () {
    var result = fizzBuzz(3)
    result.should.be.equal('Fizz')
  })
  it('should  return buzz when number can be divisibled by 5', function () {
    var result = fizzBuzz(5)
    result.should.be.equal('Buzz')
  })
  it('should  return fizzbuzz when number can be divisibled by 3 and 5 ', function () {
    var result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  it('should return number itself number cannot be divisibled by 3 or 5', function () {
    var result = fizzBuzz(7)
    result.should.be.equal(7)
  })
})