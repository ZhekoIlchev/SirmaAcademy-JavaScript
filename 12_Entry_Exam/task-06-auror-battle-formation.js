function solve(formation, commands) {

    for (let i = 0; i < commands.length; i++) {
        let actions = commands[i].split(" ");
        let command = actions[0];
        let index;
        let unit;

        switch (command) {
            case "destroy":
                index = actions[1];
                if (isValid(index, formation.length)) {
                    formation.splice(index, 1);
                } else {
                    continue;
                }
                break;
            case "swap":
                let index1 = actions[1];
                let index2 = actions[2];
                let formationSize = formation.length;

                if (index1 === index2) {
                    continue;
                }

                if (isValid(index1, formationSize) && isValid(index2, formationSize)) {
                    let swap = formation[index1];
                    formation[index1] = formation[index2];
                    formation[index2] = swap;
                } else {
                    continue;
                }
                break;
            case "add":
                unit = actions[1];
                formation.push(unit);
                break;
            case "insert":
                unit = actions[1];
                index = actions[2];
                if (isValid(index, formation.length)) {
                    formation.splice(index, 0, unit);
                } else {
                    continue;
                }
                break;
            case "center":
                let size = formation.length;
                if (size % 2 !== 0) {
                    console.log(formation[Math.floor(size / 2)]);
                } else {
                    console.log(`${formation[Math.floor(size / 2) - 1]} ${formation[Math.floor(size / 2)]}`);
                }
                continue;
        }

        console.log(formation.join(" "));
    }
}

function isValid(index, size) {
    return 0 <= index && index < size;
}

// solve([1, 2, 3, 4, 5], ['destroy 3', 'swap 0 1', 'add 6', 'center']);
// solve([1, 2, 3, 4, 5], ['add 6', 'swap 0 5', 'swap 1 4', 'swap 2 3', 'swap 2 100', 'swap 2 2', 'center']);
// solve([1, 2], ['insert 3 2', 'center', 'destroy 1', 'destroy 2', 'center']);