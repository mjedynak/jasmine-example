describe('counter tests', function() {

    it ('should be defined', function() {
    	expect(elementCounter).toBeDefined()
    })

    it ('should count 0 elements', function() {
        expect(elementCounter.count()).toEqual(0)
    })

    it ('should count 1 element', function() {
        var container = document.createElement('div')
        container.setAttribute('id','myId')
        document.body.appendChild(container)

        expect(elementCounter.count()).toEqual(1)
    })

})