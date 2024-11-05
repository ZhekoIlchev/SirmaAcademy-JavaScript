function findRecord(archive, record) {
    let firstOccurrence = archive.indexOf(record);
    let lastOccurrence = archive.lastIndexOf(record);

    if (firstOccurrence !== -1 && lastOccurrence !== -1) {
        console.log(`First Occurrence: ${firstOccurrence}`);
        console.log(`Last Occurrence: ${lastOccurrence}`);
    } else {
        console.log('Record not found');
    }
}

// findRecord(['Harry', 'Hermione', 'Harry', 'Ron'], 'Harry');
// // console.log('---');
// findRecord(['Ginny', 'Luna', 'Neville', 'Ginny'], 'Ginny');
// // console.log('---');
// findRecord(['Ron', 'Hermione', 'Luna'], 'Dumbledore');
// // console.log('---');
// findRecord(['Dobby', 'Ron', 'Hermione', 'Harry'], 'Harry');