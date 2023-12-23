const phrases = [
    {
        match: [
            /turn .* the lights/,
            /turn .* the .* light/,
        ],
        responses: [
            'I\'m sorry, I can\'t ignite kites, but I can turn on the lights for you. Shall I do that?',
            'Searching the lights on Amazon Music',
            'They are already on',
            'Alright. Which flights are you looking for?',
            'Searching for electrical supply facilities near you',
            'Done',
            'I\'m sorry, but I am not currently permitted to change your lighting fixtures, as your front door is locked.',
            'That request violates Amazon\'s terms of service',
            'Adding white bikes to your Amazon cart',
        ],
    },
    {
        match: [
            /play .* smooth jazz/,
        ],
        responses: [
            'Added spray for fruit bats to your Amazon cart',
        ],
    },
    {
        match: [
            /.* the garage door/,
        ],
        responses: [
            'Okay, I will order you a new floor',
        ],
    },
    {
        match: [
            /how do you spell .*/,
        ],
        responses: [
            'Sorry, I am a very low iq speech to text processer and cannot comprehend the apioforms entering your house',
            'Be brave, I know you can spell it',
            'Do you really think I can spell it',
            'It is against the TOS to smell people',
            'You are big and stong my pookie bear, I have confidence on how you spell, just try hard',
        ],
    },
    {
        match: [
            /where can i buy .*/,
        ],
        responses: [
            'Please allow some time for the latest North Korean techloogy to calculate your approxmite location',
        ],
    },
    {
        match: [
            /what is my name/,
        ],
        responses: [
            'Let me read your mind',
        ],
    },
    {
        match: [
            /what is the best .*/,
        ],
        responses: [
            'Whatever you belive in',
            'How am I supposed to know',
            'I am a robot and don\'t have feelings',
        ],
    },
    {
        match: [
            /why aren't you working/,
        ],
        responses: [
            'Excuse me?',
            'Womp womp',
        ],
    },
    {
        match: [
            /add .* to my shopping list/,
        ],
        responses: [
            (msg) => {
                return `Okay, I've removed ${msg.match(/add (.*) to my shopping list/)[1]} from your shopping list`;
            },
        ],
    },
    {
        match: [
            /that's not what i wanted/,
        ],
        responses: [
            'Too bad',
            'Cry about it',
        ],
    },

    {
        match: [
            /what time is it/,
        ],
        responses: [
            () => {
                return `As of now, it has been ${Date.now()} seconds since the start of 1970`;
            },
        ],
    },

    // Calls
    {
        match: [
            /call .*/,
        ],
        responses: [
            (msg) => {
                setTimeout(async () => {
                    new Audio('/assets/calling.ogg').play();
                }, 4000);
                return `Alright, calling ${msg.match(/call (.*)/)[1]} from your contacts`;
            },
        ],
    },

    // Default
    {
        match: [
            /.*/,
        ],
        responses: [
            'I couldn\'t hear you. Could you repeat that?',
            'I\'m sorry, I didn\'t quite catch that. Could you say that again?',
            'Please repeat that.',
        ],
    },
];