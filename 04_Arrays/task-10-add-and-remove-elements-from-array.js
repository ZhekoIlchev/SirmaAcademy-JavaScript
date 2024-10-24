function manipulateArray(commands) {
    let initialValue = 1;
    let array = [];

    for (let command of commands) {

        switch (command) {
            case 'add':
                array.push(initialValue++);
                break;
            case 'remove':
                array.pop();
                break;
        }
    }

    console.log(array.length === 0 ? 'Empty' : array.join(' '));
}

manipulateArray(['add', 'add', 'add', 'add']);
manipulateArray(['add', 'add', 'remove', 'add', 'add']);
manipulateArray(['remove', 'remove', 'remove', 'remove']);