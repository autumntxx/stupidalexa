async function parseMessage(msg) {
    if (!msg.toLowerCase().includes('alexa')) {
        return;
    };
    const reqmsg = msg.toLowerCase().split('alexa ')[1];
    console.log(reqmsg);

    let possibleresponses = [];
    switch (reqmsg) {
        case 'play smooth jazz':
        case 'play some smooth jazz': {
            possibleresponses.push(...[
                'Added spray for fruit bats to your Amazon cart',
            ]);
            break;
        };
        case 'turn off the lights':
        case 'turn on the lights': {
            possibleresponses.push(...[
                'I\'m sorry, I can\'t ignite kites, but I can turn on the lights for you. Shall I do that?',
                'Searching the lights on Amazon Music',
                'They are already on',
                'Alright. Which flights are you looking for?',
                'Searching for electrical supply facilities near you',
                'Done',
                'I\'m sorry, but I am not currently permitted to change your lighting fixtures, as your front door is locked.',
                'That request violates Amazon\'s terms of service',
                'Adding white bikes to your Amazon cart',
            ]);
            break;
        };
        case 'open the garage door': {
            possibleresponses.push(...[
                'Okay, I will order you a new floor',
            ]);
            break;
        };
        case 'why aren\'t you working': {
            possibleresponses.push(...[
                'Excuse me?',
                'Womp womp',
            ]);
            break;
        };
        default: {
            possibleresponses.push(...[
                'I couldn\'t hear you. Could you repeat that?',
                'I\'m sorry, I didn\'t quite catch that. Could you say that again?',
                'Please repeat that.',
            ]);
        };
    };

    const res = possibleresponses[Math.floor(Math.random() * possibleresponses.length)];
    console.log(res);
    say(res);
};