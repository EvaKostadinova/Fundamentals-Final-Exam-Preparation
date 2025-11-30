function secretChat(input) {
    let message = input.shift();

    for(let line of input){
        if(line === 'Reveal'){
            break;
        }

        let [command, p1, p2] = line.split(':|:');

        if(command === 'InsertSpace'){
            let index = Number(p1);
            message = message.slice(0, index) + ' ' + message.slice(index);
            console.log(message);
        } else if(command === 'Reverse'){
            const substring = p1;
            if(message.includes(substring)){
                message = message.replace(substring, '');

                const reversed = substring.split('').reverse().join('');
                message += reversed;

                console.log(message);
                
            } else {
                console.log('error');
                
            }
        } else if(command === 'ChangeAll'){
            const substring = p1;
            const replacement = p2;

            message = message.split(substring).join(replacement);
            console.log(message);
        }
    }

    console.log(`You have a new text message: ${message}`);
    
}

secretChat([

'heVVodar!gniV',

'ChangeAll:|:V:|:l',

'Reverse:|:!gnil',

'InsertSpace:|:5',

'Reveal'

]);