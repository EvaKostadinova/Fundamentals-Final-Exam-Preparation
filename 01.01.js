function theImitationGame(arr) {
    let message = arr.shift();
    let command = arr.shift();

    while(command !== 'Decode'){
        let tokens = command.split('|');
        let action = tokens.shift();

        if(action === 'Move'){
            let lettersToMove = Number(tokens.shift());

            let substring = message.substring(0, lettersToMove);
            message = message.replace(substring, '');

            message += substring;

        } else if(action === 'Insert'){
            let index = Number(tokens.shift());
            let val = tokens.shift();

            message = message.substring(0, index) + val + message.substring(index);
        } else if(action === 'ChangeAll'){
           let [substring, replacement] = tokens;
           // let substring = tokens.shift();
           // let replacement = tokens.shift();

           while(message.includes(substring)){
            message = message.replace(substring, replacement);
           }

        }


        command = arr.shift();
    }

    console.log(`The decrypted message is: ${message}`); 

}

theImitationGame([

'zzHe',

'ChangeAll|z|l',

'Insert|2|o',

'Move|3',

'Decode'

]);