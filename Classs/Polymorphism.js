class Animal {
    speak() {
        console.log("  Animal ")
    }
}

class Dog  extends Animal {
    speak() {
        console.log(" Dog Bark")
    }
}

class Cat extends Animal {
    speak () {
        console.log("Meow ")
    }
}

function makeAnimalSpeak(animal) {
    animal.speak();
}

const myCat =  new Cat();
const myDog = new Dog();

makeAnimalSpeak(myCat)
makeAnimalSpeak(myDog)