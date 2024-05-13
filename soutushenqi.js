/*
     0. data拼接字符串转为字节数组
     1. 字节数组加密算法处理
     2. 密文转为长16的字节数组
     3. 字节数组转为十六进制大写
*/

const e = 'maxHeight=99999&maxWidth=99999&minHeight=0&minWidth=0&page=2&product_id=52&searchMode=ACCURATE_SEARCH&search_word=崩铁&sort=0&version_code=28122&key=d9fd3ec394'
function decode() { 
    const first = stringToBytes1(e)
    console.log(first, first.length)
    const second = c(first)
    console.log(second)
    const third = wordsToBytes(second)
    console.log(third)
    const forth = bytesToHex(third).toUpperCase()
    console.log(forth)
    return forth
}

const c = function (t) {
    for (var c = bytesToWords(t), l = 8 * t.length, s = 1732584193, u = -271733879, f = -1732584194, d = 271733878, p = 0; p < c.length; p++)
            c[p] = 16711935 & (c[p] << 8 | c[p] >>> 24) | 4278255360 & (c[p] << 24 | c[p] >>> 8);
    c[l >>> 5] |= 128 << l % 32,
        c[14 + (l + 64 >>> 9 << 4)] = l;
    console.log(c, c.length)
    var h = _ff
        , m = _gg
        , v = _hh
        , g = _ii;
    for (p = 0; p < c.length; p += 16) {
        var y = s
            , b = u
            , w = f
            , O = d;
        u = g(u = g(u = g(u = g(u = v(u = v(u = v(u = v(u = m(u = m(u = m(u = m(u = h(u = h(u = h(u = h(u, f = h(f, d = h(d, s = h(s, u, f, d, c[p + 0], 7, -680876936), u, f, c[p + 1], 12, -389564586), s, u, c[p + 2], 17, 606105819), d, s, c[p + 3], 22, -1044525330), f = h(f, d = h(d, s = h(s, u, f, d, c[p + 4], 7, -176418897), u, f, c[p + 5], 12, 1200080426), s, u, c[p + 6], 17, -1473231341), d, s, c[p + 7], 22, -45705983), f = h(f, d = h(d, s = h(s, u, f, d, c[p + 8], 7, 1770035416), u, f, c[p + 9], 12, -1958414417), s, u, c[p + 10], 17, -42063), d, s, c[p + 11], 22, -1990404162), f = h(f, d = h(d, s = h(s, u, f, d, c[p + 12], 7, 1804603682), u, f, c[p + 13], 12, -40341101), s, u, c[p + 14], 17, -1502002290), d, s, c[p + 15], 22, 1236535329), f = m(f, d = m(d, s = m(s, u, f, d, c[p + 1], 5, -165796510), u, f, c[p + 6], 9, -1069501632), s, u, c[p + 11], 14, 643717713), d, s, c[p + 0], 20, -373897302), f = m(f, d = m(d, s = m(s, u, f, d, c[p + 5], 5, -701558691), u, f, c[p + 10], 9, 38016083), s, u, c[p + 15], 14, -660478335), d, s, c[p + 4], 20, -405537848), f = m(f, d = m(d, s = m(s, u, f, d, c[p + 9], 5, 568446438), u, f, c[p + 14], 9, -1019803690), s, u, c[p + 3], 14, -187363961), d, s, c[p + 8], 20, 1163531501), f = m(f, d = m(d, s = m(s, u, f, d, c[p + 13], 5, -1444681467), u, f, c[p + 2], 9, -51403784), s, u, c[p + 7], 14, 1735328473), d, s, c[p + 12], 20, -1926607734), f = v(f, d = v(d, s = v(s, u, f, d, c[p + 5], 4, -378558), u, f, c[p + 8], 11, -2022574463), s, u, c[p + 11], 16, 1839030562), d, s, c[p + 14], 23, -35309556), f = v(f, d = v(d, s = v(s, u, f, d, c[p + 1], 4, -1530992060), u, f, c[p + 4], 11, 1272893353), s, u, c[p + 7], 16, -155497632), d, s, c[p + 10], 23, -1094730640), f = v(f, d = v(d, s = v(s, u, f, d, c[p + 13], 4, 681279174), u, f, c[p + 0], 11, -358537222), s, u, c[p + 3], 16, -722521979), d, s, c[p + 6], 23, 76029189), f = v(f, d = v(d, s = v(s, u, f, d, c[p + 9], 4, -640364487), u, f, c[p + 12], 11, -421815835), s, u, c[p + 15], 16, 530742520), d, s, c[p + 2], 23, -995338651), f = g(f, d = g(d, s = g(s, u, f, d, c[p + 0], 6, -198630844), u, f, c[p + 7], 10, 1126891415), s, u, c[p + 14], 15, -1416354905), d, s, c[p + 5], 21, -57434055), f = g(f, d = g(d, s = g(s, u, f, d, c[p + 12], 6, 1700485571), u, f, c[p + 3], 10, -1894986606), s, u, c[p + 10], 15, -1051523), d, s, c[p + 1], 21, -2054922799), f = g(f, d = g(d, s = g(s, u, f, d, c[p + 8], 6, 1873313359), u, f, c[p + 15], 10, -30611744), s, u, c[p + 6], 15, -1560198380), d, s, c[p + 13], 21, 1309151649), f = g(f, d = g(d, s = g(s, u, f, d, c[p + 4], 6, -145523070), u, f, c[p + 11], 10, -1120210379), s, u, c[p + 2], 15, 718787259), d, s, c[p + 9], 21, -343485551),
        s = s + y >>> 0,
        u = u + b >>> 0,
        f = f + w >>> 0,
        d = d + O >>> 0
    }
    return endian([s, u, f, d])
}
_ff = function(e, t, n, r, o, i, a) {
    var c = e + (t & n | ~t & r) + (o >>> 0) + a;
    return (c << i | c >>> 32 - i) + t
}

_gg = function(e, t, n, r, o, i, a) {
    var c = e + (t & r | n & ~r) + (o >>> 0) + a;
    return (c << i | c >>> 32 - i) + t
}

_hh = function(e, t, n, r, o, i, a) {
    var c = e + (t ^ n ^ r) + (o >>> 0) + a;
    return (c << i | c >>> 32 - i) + t
}

_ii = function(e, t, n, r, o, i, a) {
    var c = e + (n ^ (t | ~r)) + (o >>> 0) + a;
    return (c << i | c >>> 32 - i) + t
}

c._blocksize = 16
c._digestsize = 16

// utils
const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
function wordsToBytes(e) {
    for (var t = [], n = 0; n < 32 * e.length; n += 8)
        t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
    return t
}
function stringToBytes(e) {
    for (var t = [], n = 0; n < e.length; n++)
        t.push(255 & e.charCodeAt(n));
    return t
}
function bytesToString(e) {
    for (var t = [], n = 0; n < e.length; n++)
        t.push(String.fromCharCode(e[n]));
    return t.join("")
}
function stringToBytes1(e) { 
    return stringToBytes(unescape(encodeURIComponent(e)))
}
function bytesToString(e) {
    return decodeURIComponent(escape(bytesToString()))
}
function wordsToBytes(e) {
    for (var t = [], n = 0; n < 32 * e.length; n += 8)
        t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
    return t
}
function bytesToHex(e) {
    for (var t = [], n = 0; n < e.length; n++)
        t.push((e[n] >>> 4).toString(16)),
        t.push((15 & e[n]).toString(16));
    return t.join("")
}
function bytesToWords(e) {
    for (var t = [], n = 0, r = 0; n < e.length; n++,
    r += 8)
        t[r >>> 5] |= e[n] << 24 - r % 32;
    return t
}
function endian(e) {
    if (e.constructor == Number)
        return 16711935 & rotl(e, 8) | 4278255360 & rotl(e, 24);
    for (var t = 0; t < e.length; t++)
        e[t] = endian(e[t]);
    return e
}
function rotl(e, t) {
    return e << t | e >>> 32 - t
}
function rotr(e, t) {
    return e << 32 - t | e >>> t
}
// test
decode()