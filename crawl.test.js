const {normalizeURL} = require('./crawl.js')
const {getURLsFromHTML} = require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizeURL strip protocol', () => {
    const input = 'https://blog.boot.dev'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev'
    expect(actual).toEqual(expected)
}) 

test('normalizeURL capitals', () => {
    const input = 'https://blog.boot.dev'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev'
    expect(actual).toEqual(expected)
}) 

test('normalizeURL trailing Slashes', () => {
    const input = 'https://blog.boot.dev'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev'
    expect(actual).toEqual(expected)
}) 

test('normalizeURL strip http', () => {
    const input = 'https://blog.boot.dev'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev'
    expect(actual).toEqual(expected)
}) 

test('getURLsFromHTML', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "https://blog.boot.dev">
                Boot.Dev.blog
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://blog.boot.dev/"]
    expect(actual).toEqual(expected)
}) 

test('getURLsFromHTML for relative Paths', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "/path/">
                Boot.Dev.blog
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected)
}) 

test('getURLsFromHTML from both', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "https://blog.boot.dev/path1/">
                Boot.Dev.blog Blog Path 1
            </a>
            <a href = "/path2/">
            Boot.Dev.blog blog Path 2
        </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://blog.boot.dev/path1/","https://blog.boot.dev/path2/"]
    expect(actual).toEqual(expected)
}) 

test('getURLsFromHTML from bad URL', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "invalid">
                Boot.Dev.blog
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = []
    expect(actual).toEqual(expected)
}) 