const findTheOldest = function(array) {
    
    // store the oldest person in an object
    const oldestPerson = {
        name: "",
        age: 0,
    };

    for (let i = 0; i < array.length; i++) {

        const date = new Date();
        let lifespan = 0; 

        // check for current age if not dead 
        if (!array[i].yearOfDeath) {
            let currentYear = date.getFullYear();
            lifespan = currentYear - array[i].yearOfBirth;
        }
        else {
            lifespan = array[i].yearOfDeath - array[i].yearOfBirth;
        } 

        // update current older person
        if (oldestPerson.age < lifespan) {
            oldestPerson.age = lifespan;
            oldestPerson.name = array[i].name;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
