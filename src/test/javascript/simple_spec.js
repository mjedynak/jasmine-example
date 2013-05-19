describe('incrementer tests', function() {

    it ('should be defined', function() {
    	expect(incrementer).toBeDefined()
    })

    it ('should increment', function() {
        expect(incrementer.increment(1)).toEqual(2)
    })

    it ('should throw exception when argument is not a number', function() {
        var illegalArg = 'stringy'
        var thrown
        try {
            incrementer.increment(illegalArg)
        } catch (e) {
            thrown = e
        }
        expect(thrown).toBe('Argument ' + illegalArg + ' is not a number')
    })

})