console.log("hamster stuff", hamster["name"])
console.log(`The first hamster child ${hamster.children[0]} ${hamster.children[1]} ${hamster.children[2]}`)

for (let i = 0; i < hamster.children.length; i++) {
    console.log(`Hamster child: ${i + 1} is ${hamster.children[i]}`);

    
}

hamster.child.forEach(item => {
    console.log(`Hamster Child ${index} ${item}`);
    
});