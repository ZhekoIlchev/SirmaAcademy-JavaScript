function calculateDiscount(age, membership) {
    if (age < 18) {
        console.log('20% discount')
    } else if (18 <= age && age <= 64) {
        if (membership == 'Yes') {
            console.log('20% discount')
        } else {
            console.log('10% discount')
        }
    } else {
        console.log('30% discount')
    }
}

calculateDiscount(20, "Yes");
calculateDiscount(15, "No");
calculateDiscount(70, "No");