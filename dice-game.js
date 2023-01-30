function rollDice() {
    let goldCoins = 0;
    for (i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random()*6)+1;
        alert('You rolled a ' + roll + '!');
        if (roll === 1) {
            alert ('Game Over, no more rolls!');
            break;
        } else if ((roll === 4) && (goldCoins > 0)) {
            goldCoins -= 1;
            alert('Sorry... you lost 1 gold coin!');
            alert('So far you have won ' + goldCoins + ' gold coins!');
        } else if (roll < 5) {
            continue;
        } else if (roll === 5) {
            goldCoins += roll;
            alert('Congratulations! You have won 5 gold coins!');
            alert('So far you have won ' + goldCoins + ' gold coins!');
        } else if (roll === 6) {
            goldCoins += roll
            alert('Congratulations! You have won 6 gold coins!');
            alert('So far you have won ' + goldCoins + ' gold coins!');
        }
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}