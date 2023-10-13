
function solution(n, words) {
    for (let i = 1; i < words.length; i++) {
        const postWord = words[i]
        if (words.indexOf(postWord) !== i) {
            return [i%n +1, Math.floor(i/n)+1]
        }
        
        const preAlpha = words[i-1].slice(-1)
        const postAlpha = postWord[0]
        if(preAlpha !== postAlpha) {
            return [i%n +1, Math.floor(i/n)+1]
        }
    }
    return [0,0]
}