function solve(input) {
    let lastSlashIndex = String(input).lastIndexOf('\\');
    let lastDotIndex = String(input).lastIndexOf('.');

    console.log(`File name: ${input.substring(lastSlashIndex + 1, lastDotIndex)}`);
    console.log(`File extension: ${input.substring(lastDotIndex + 1)}`);

}

solve('C:\\desktop\\academy\\template.pptx');
console.log('---');
solve('C:\\Projects\\website.folder\\file.name.js');