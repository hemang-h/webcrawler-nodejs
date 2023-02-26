const {normalizeURL} = require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizeURL strip protocol', () => {
    const input = 'https://google.com'
    const actual = normalizeURL(input)
    const expected = 'google.com'
    expect(actual).toEqual(expected)
}) 

test('normalizeURL capitals', () => {
    const input = 'https://GOOGLE.com'
    const actual = normalizeURL(input)
    const expected = 'google.com'
    expect(actual).toEqual(expected)
}) 

test('normalizeURL trailing Slashes', () => {
    const input = 'https://google.com'
    const actual = normalizeURL(input)
    const expected = 'google.com'
    expect(actual).toEqual(expected)
}) 

test('normalizeURL strip http', () => {
    const input = 'https://google.com'
    const actual = normalizeURL(input)
    const expected = 'google.com'
    expect(actual).toEqual(expected)
}) 