function rotateArray(array) {
    for (let i = 0; i < array.length; i++) {

        if (array[i] < 0) {
            let negativeElement = array[i];
            array.splice(i, 1);
            array.unshift(negativeElement);
        }
    }

    console.log(array);
}

rotateArray([7, -2, 8, 9]);
rotateArray([3, -2, 0, -1]);