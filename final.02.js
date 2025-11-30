function bossRush(arr){
    let inputsCount = Number(arr.shift());

    let pattern = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/;

    for(let i = 0; i < inputsCount; i++){
        let line = arr.shift();

        let match = line.match(pattern);

        if(match){
            let boss = match.groups.boss;
            let title = match.groups.title;

            console.log(`${boss}, The ${title}`);
            console.log(`>> Strength: ${boss.length}`);
            console.log(`>> Armor: ${title.length}`);
            
        } else {
            console.log("Access denied!");
        }
    }

}

bossRush(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#']);