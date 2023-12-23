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
            /why aren't you working/,
        ],
        responses: [
            'Excuse me?',
            'Womp womp',
        ],
    },
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