function messageManager(arr){
    let messagesCapacityPerUser = Number(arr.shift());
    let command = arr.shift();

    let messagesData = {};

    while(command !== 'Statistics'){
        let tokens = command.split('=');
        let action = tokens.shift();

        if(action === 'Add'){
            let username = tokens.shift();
            let sent = Number(tokens.shift());
            let recieved = Number(tokens.shift());

            if(!(username in messagesData)){
                messagesData[username] = { sent, recieved };
            }  

        } else if(action === 'Message'){
            let sender = tokens.shift();
            let reciever = tokens.shift();

            if(sender in messagesData && reciever in messagesData){
                messagesData[sender].sent++;
                messagesData[reciever].recieved++;

                let senderTotal = messagesData[sender].sent + messagesData[sender].recieved;

                if(senderTotal >= messagesCapacityPerUser){
                    delete messagesData[sender];

                    console.log(`${sender} reached the capacity!`);
            
                }

                if(reciever in messagesData){
                    let receiverTotal = messagesData[reciever].sent + messagesData[reciever].recieved;

                    if(receiverTotal >= messagesCapacityPerUser){
                        delete messagesData[reciever];

                        console.log(`${reciever} reached the capacity!`);

                    }
                }
            }


        } else if(action === 'Empty'){
            let username = tokens.shift();

            if(username === 'All'){
                messagesData = {};

            } else {
                if(username in messagesData){
                    delete messagesData[username];

                }

            }

        }

        command = arr.shift();

    }

    let entries = Object.entries(messagesData);
    
    console.log(`Users count: ${entries.length}`);

    for(let [username, data] of entries){
        let totalMessages = data.sent + data.recieved;

        console.log(`${username} - ${totalMessages}`);
        
    }

}

messageManager(["12",
"Add=Bonnie=3=5",
"Add=Johny=4=4",
"Empty=All",
"Add=Bonnie=3=3",
"Statistics"]);