function countVote(votes) {
    let isEveryoneAbstain = true;
    let finalDecision = 0;

    for (let i = 0; i < votes.length; i++) {
        if (votes[i] === 'Yes') {
            finalDecision += 1;
            isEveryoneAbstain = false;
        } else if (votes[i] === 'No') {
            finalDecision -= 1;
            isEveryoneAbstain = false;
        }
    }

    if (isEveryoneAbstain) {
        console.log('Abstain')
        return;
    }

    if (finalDecision > 0) {
        console.log('Yes')
    } else if (finalDecision < 0) {
        console.log('No')
    } else {
        console.log('Tie')
    }
}

// countVote(['Yes', 'No', 'Yes', 'Abstain', 'Yes']);
// countVote(['No', 'No', 'Yes']);
// countVote(['Yes', 'No']);
// countVote(['Abstain']);
// countVote(['No', 'No', 'Abstain', 'Abstain', 'Yes', 'Yes']);
// countVote(['No', 'Abstain', 'Abstain']);