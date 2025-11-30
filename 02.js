function mirrorWords(input) {
    let text = input[0];

    const pattern = /([@#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    const matches = [...text.matchAll(pattern)];

    if(matches.length === 0){
        console.log('No word pairs found!');
        console.log('No mirror words!');
        return;
    }

    console.log(`${matches.length} word pairs found!`);

    let mirror = [];
    
    for(let m of matches){
        const word1 = m[2];
        let word2 = m[3];

        const reversed = word2.split('').reverse().join('');

        if(word1 === reversed){
            mirror.push(`${word1} <=> ${word2}`);
        }
    }

    if(mirror.length === 0){
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(mirror.join(', '));
        
    }

}

mirrorWords([

'@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'

]);