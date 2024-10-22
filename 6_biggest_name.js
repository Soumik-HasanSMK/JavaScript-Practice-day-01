var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let biggestName = friends[0];
for (let i = 0; i < friends.length; i++) {
    if (biggestName.length < friends[i].length)
        biggestName = friends[i];
}
console.log(biggestName);