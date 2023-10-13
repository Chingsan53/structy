const compress = (s) => {
    let result = [];
    let i = 0;
    let j = 0;

    while (j <= s.length) {
        if (s[i] === s[j]) {
            j += 1;
        } else {
            const num = j - i;
            if (num === 1) {
                result.push(s[i]);
            } else {
                result.push(String(num), s[i]);
            }
            i = j;
        }
    }

    //return result.join('');
    console.log(result.join(''));
};

compress("ccaaatsss"); //-> '2c3at3s'
//console.log(result.join(''));
compress("ssssbbz"); //-> '4s2bz'
compress("ppopppp"); //-> '2po5p'
compress("nnneeeeeeeeeeeezz"); // -> '3n12e2z'
compress("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"); // ->'127y'