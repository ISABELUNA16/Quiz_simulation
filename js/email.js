function sendEmail(){
    
    const eeClient = require('elasticemail-webapiclient').client;
    const options = {
        apiKey: 'd450eee5-2af1-4b0f-b22a-098d16541a7d',
        apiUri: 'https://api.elasticemail.com/',
        apiVersion: 'v2'
    }

    const EE = new eeClient(options);

    // Load account data
    EE.Account.Load().then(function(resp) {
        console.log(resp);
    });

    const emailParams = {
        "subject": 'Demo examen',
        "to": 'isabel1625.luna@gmail.com',
        "from": 'isabel1625.luna@gmail.com',
        "replyTo": 'replyto@baz.com',
        "body": 'Demo Demo',
        "fromName": 'Rosmery Luna Tito',
        "bodyType": 'Plain'
    };

    // Send email
    EE.Email.Send(emailParams)
    .catch((err) => {
        throw new Error(err);
    }); 
    
}
