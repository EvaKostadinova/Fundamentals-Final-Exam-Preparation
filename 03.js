function needForSpeed(input) {
    const n = Number(input.shift());
    let heroes = {};

    for(let i = 0; i < n; i++){
        const [name, hp, mp] = input.shift().split(' ');

        heroes[name] = {
            hp: Number(hp),
            mp: Number(mp)
        }
    }

    for(let line of input){
        if(line === 'End') break;

        let [command, hero, p1, p2] = line.split(' - ');

        if(command === 'CastSpell'){
            const mpNeeded = Number(p1);
            const spell = p2;

            if(heroes[hero].mp >= mpNeeded){
                heroes[hero].mp -= mpNeeded;
                console.log(`${hero} has successfully cast ${spell} and now has ${heroes[hero].mp} MP!`);
            } else {
                console.log(`${hero} does not have enough MP to cast ${spell}!`);
            }
        } else if(command === 'TakeDamage'){
            const damage = Number(p1);
            const attacker = p2;

            heroes[hero].hp -= damage;

            if(heroes[hero].hp > 0){
                console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`);
            } else {
                delete heroes[hero];
                console.log(`${hero} has been killed by ${attacker}!`);
            }

        } else if(command === 'Recharge'){
            const amount = Number(p1);
            const oldMP = heroes[hero].mp;

            heroes[hero].mp = Math.min(200, heroes[hero].mp + amount);

            console.log(`${hero} recharged for ${heroes[hero].mp - oldMP} MP!`);
            
        } else if(command === 'Heal'){
            const amount = Number(p1);
            const oldHP = heroes[hero].hp;

            heroes[hero].hp = Math.min(100, heroes[hero].hp + amount);

            console.log(`${hero} healed for ${heroes[hero].hp - oldHP} HP!`);
            
        }
    }

    for(let hero in heroes){
        console.log(hero);
        console.log(`  HP: ${heroes[hero].hp}`);
        console.log(`  MP: ${heroes[hero].mp}`);
    }

}

needForSpeed('2',

'Solmyr 85 120',

'Kyrre 99 50',

'Heal - Solmyr - 10',

'Recharge - Solmyr - 50',

'TakeDamage - Kyrre - 66 - Orc',

'CastSpell - Kyrre - 15 - ViewEarth',

'End');