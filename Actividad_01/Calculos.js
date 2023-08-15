const Sumar = (num_1, num_2) => {

    return num_1 + num_2;
};
console.log(Sumar(5, 10));

// - - - - - - - - - - - - 

const Division = (num_3, num_4) => {

    return num_3 / num_4;
};
console.log(Division(20, 2));
console.log(Division(20, 0));

// - - - - - - - - - - - - 

const MaxValueOfArray = array => {

    return Math.max(...array);
};
console.log(MaxValueOfArray([2,8,9,7,5,6]));