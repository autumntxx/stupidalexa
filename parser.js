async function parseMessage(msg) {
    if (!msg.toLowerCase().includes('alexa')) {
        return;
    };
    const reqmsg = msg.toLowerCase().split('alexa ')[1];
    console.log(reqmsg);

    let possibleresponses = [];
    for (let response of phrases) {
        let matches = false;
        for (let match of response.match) {
            if (match.exec(reqmsg)) matches = true;
        };

        if (matches) {
            possibleresponses = response.responses;
            break;   
        };
    };

    const res = possibleresponses[Math.floor(Math.random() * possibleresponses.length)];
    console.log(res);
    say(res);
};