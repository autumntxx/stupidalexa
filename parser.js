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

    let mathparsed;

    try {
        let result = reqmsg.replace('what\'s', '');
        result = result.replace('what is', '');
        result = result.replace('what have', '');
        result = result.replace(',', '');

        mathparsed = math.evaluate(result);
        mathparsed = mathparsed * (1 + ((math.random() * .2) - .1));
        mathparsed = Math.round(mathparsed * 10) / 10;
    } catch (err) {};

    if (mathparsed) {
        const mathresponses = ['I think it is', 'It\'s about', 'Somewhere in the neighborhood of', 'It\'s around', 'I believe it could be'];
        say(mathresponses[Math.floor(mathresponses.length * Math.random())] + ' ' + mathparsed);
        return;
    };

    const res = possibleresponses[Math.floor(Math.random() * possibleresponses.length)];
    if (typeof res == 'string') {
        say(res);
    } else if (typeof res == 'function') {
        say(res(reqmsg));
    };
};