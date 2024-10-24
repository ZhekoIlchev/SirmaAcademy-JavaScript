function solve(array) {
    let numbers = array[0].split(' ').map(Number);
    let commands = array.slice(1);

    for (let i = 0; i < commands.length; i++) {
        let actions = commands[i].split(' ');
        let action = actions[0];
        let element;

        switch (action) {
            case 'Add':
                element = Number(actions[1]);
                numbers.push(element);
                break;
            case 'Remove':
                element = Number(actions[1]);
                let elementIndex = numbers.indexOf(element);

                if (elementIndex !== -1) {
                    numbers.splice(elementIndex, 1);
                }
                break;
            case 'RemoveAt':
                let index = Number(actions[1]);
                numbers.splice(index, 1);
                break;
            case 'Insert':
                element = Number(actions[1]);
                let atIndex = Number(actions[2]);
                numbers.splice(atIndex, 0, element)
                break;
        }
    }

    console.log(numbers.join(' '));
}

solve(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);