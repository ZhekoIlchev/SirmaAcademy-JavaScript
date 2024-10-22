function calculateArea(type, dimA, dimB) {
    let area;

    if (type === "square") {
        area = dimA * dimA;
    } else if (type === "rectangle") {
        area = dimA * dimB;
    } else if (type === "circle") {
        area = Math.PI * dimA ** 2;
    } else if (type === "triangle") {
        area = (dimA * dimB) / 2;
    }

    console.log(area != undefined ? area.toFixed(2) : "unknown figure");
}

calculateArea("square", 5);
calculateArea("rectangle", 10, 3.5);
calculateArea("triangle", 4.5, 20);
calculateArea("circle", 10);
calculateArea("unknownType");