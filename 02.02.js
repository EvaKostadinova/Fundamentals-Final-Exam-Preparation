function adAstra(arr) {
    let pattern = /([|#])(?<name>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<kcals>\d+)\1/g; //ако не очакваме повече от 1 съвпадение, не слагаме g
    let str = arr.shift();
    let items = [];
    let totalKcals = 0;

    let matches = str.matchAll(pattern);

    for(let match of matches){
        let { name, expDate, kcals } = match.groups;
        kcals = Number(kcals);

        items.push({ name, expDate, kcals });

        totalKcals += kcals;
        
    }

    let days = Math.floor(totalKcals / 2000);

    console.log(`You have food to last you for: ${days} days!`);
    
    for(let item of items){
        console.log(`Item: ${item.name}, Best before: ${item.expDate}, Nutrition: ${item.kcals}`);
        
    }

}

adAstra([

'#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'

])