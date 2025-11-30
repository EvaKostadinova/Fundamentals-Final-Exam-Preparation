function stringGame(arr){
    let string = arr.shift();
    let command = arr.shift();

    while(command !== 'Done'){
        let tokens = command.split(' ');
        let action = tokens.shift();
        
        if(action === 'Change'){
            let char = tokens.shift();
            let replacement = tokens.shift();

            while(string.includes(char)){
            string = string.replace(char, replacement);
           }

           console.log(`${string}`);
           

        } else if(action === 'Includes'){
            let substring = tokens.shift();

            if(string.includes(substring)){
                console.log('True');

            } else {
                console.log('False');

            }

        } else if(action === 'End'){
            let substring = tokens.shift();

            if(string.endsWith(substring)){
                console.log('True');

            } else {
                console.log('False');
                
            }

        } else if(action === 'Uppercase'){
            string = string.toUpperCase();

            console.log(string);
            

        } else if(action === 'FindIndex'){
            let char = tokens.shift();

            console.log(`${string.indexOf(char)}`);
            

        } else if(action === 'Cut'){
            let startIndex = Number(tokens.shift());
            let count = Number(tokens.shift());

            let cut = string.substring(startIndex, startIndex + count);

            console.log(cut);
            
        }
        
        command = arr.shift();
    }

}

stringGame(["*S0ftUni is the B3St Plac3**",
"Change 2 o",
"Includes best",
"End is",
"Uppercase",
"FindIndex P",
"Cut 3 7",
"Done"]);