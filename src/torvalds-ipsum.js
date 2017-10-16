(function() {

    var quotes = [
        'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.',
        'I\'m doing a (free) operating system (just a hobby, won\'t be big and professional like gnu) for 386(486) AT clones.',
        'My name is Linus Torvalds and I am your god.',
        'Those that can, do. Those that can\'t, complain.',
        'I\'m basically a very lazy person who likes to get credit for things other people actually do.',
        'I don\'t ask for money. I don\'t ask for sexual favors. I don\'t ask for access to the hardware you design and sell. I just ask for the thing I gave you: source code that I can use myself',
        'The thing that has always disturbed me about O_DIRECT is that the whole interface is just stupid, and was probably designed by a deranged monkey on some serious mind-controlling substances. In other words, it\'s an Oracleism',
        'Some people have told me they don\'t think a fat penguin really embodies the grace of Linux, which just tells me they have never seen an angry penguin charging at them in excess of 100 mph. They\'d be a lot more careful about what they say if they had.',
        'See, you not only have to be a good coder to create a system like Linux, you have to be a sneaky bastard too ',
        'Talk is cheap. Show me the code.',
        '\'m a bastard. I have absolutely no clue why people can ever think otherwise. Yet they do. People think I\'m a nice guy, and the fact is that I\'m a scheming, conniving bastard who doesn\'t care for any hurt feelings or lost hours of work, if it just results in what I consider to be a better system. And I\'m not just saying that. I\'m really not a very nice person. I can say "I don\'t care" with a straight face, and really mean it.',
        'In short: just say NO TO DRUGS, and maybe you won\'t end up like the Hurd people.',
        'Anybody who tells me I can\'t use a program because it\'s not open source, go suck on rms. I\'m not interested. 99% of that I run tends to be open source, but that\'s my choice, dammit.',
        'The fact that ACPI was designed by a group of monkeys high on LSD, and is some of the worst designs in the industry obviously makes running it at any point pretty damn ugly.',
        'Software is like sex; it\'s better when it\'s free.',
        'I do get my pizzas paid for by Linux indirectly.',
        'In my opinion MS is a lot better at making money than it is at making good operating systems.',
        'Microsoft isn\'t evil, they just make really crappy operating systems.',
        'Shareware tends to combine the worst of commercial software with the worst of free software. ',
        'The memory management on the PowerPC can be used to frighten small children.',
        'An infinite number of monkeys typing into GNU emacs would never make a good program.',
    ];

    this.TorvaldsIpsum = function () {
    }

    TorvaldsIpsum.prototype.get = function(limit) {
        var resp = [],
            used = [];
        while (resp.length < limit) {
            var index = Math.floor(Math.random() * quotes.length);
            if (used.indexOf(index)) {
                used.push(index);
                resp.push(quotes[index]);
            }
        }

        return resp;
    }

}());
