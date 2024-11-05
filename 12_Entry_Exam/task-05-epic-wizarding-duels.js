function solve(input) {
    const JINX_MAGIC = "/";
    const JINX_COUNTER_MAGIC = "\\";
    const CURSE_MAGIC = "!";
    const ANCIENT_MAGIC = "<";
    const ANCIENT_COUNTER_MAGIC = ">";

    let magics = input.split('');
    let duel = [];

    for (let i = 0; i < magics.length; i++) {
        if (i === 0 || duel.length === 0) {
            duel.push(magics[i]);
            continue;
        }

        let previousMagic = duel[duel.length - 1];
        let currentMagic = magics[i];
        if (previousMagic === JINX_MAGIC && currentMagic === JINX_COUNTER_MAGIC) {
            duel.pop();
        } else if (previousMagic === CURSE_MAGIC && currentMagic === CURSE_MAGIC) {
            duel.pop();
        } else if (previousMagic === ANCIENT_MAGIC && currentMagic === ANCIENT_COUNTER_MAGIC) {
            duel.pop();
        } else {
            duel.push(currentMagic);
        }
    }

    if (duel.length === 0) {
        console.log('Epic')
    } else {
        console.log('Not Epic')
    }
}

// solve('/\\/\\//\\/\\\\');
// solve('//!!\\//<!!>\\\\\\');
// solve('///\\\\');
// solve('<!>!');
// solve('/</!!>\\\\');