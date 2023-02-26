const {normalizeURL} = require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizeURL', () => {
    const input = 'https://google.com'
    const actual = normalizeURL(input)
    const expected = 'google.com'
    expect(actual).toEqual(expected)
}) 