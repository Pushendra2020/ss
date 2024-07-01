let weight = document.getElementById("we");
let height = document.getElementById("he");
let sum = document.getElementById("sum");
let age = document.getElementById("Age");
let gender = document.getElementById("gender");
let male = document.getElementById("male");
let female = document.getElementById("female");

let bmi;
if (male.value == male) {
    gender = 0;
} else {
    gender = 1;
}
sum.addEventListener('click', () => {
    weight = weight.value;
    height = height.value;
    age = age.value;
    bmi = weight / (height * height);
    let re = Math.ceil(bmi * 100) / 100;
    console.log(re);
    if (gender === 0) {
        let bdf_male = ((1.20 * bmi) + (0.23 * age) - 16.2);
        let se = Math.ceil(bdf_male * 100) / 100;
        console.log(se);
    }
    if (gender === 1) {
        let bdf_female = ((1.20 * bmi) + (0.23 * age) - 5.4);
        let se = Math.ceil(bdf_female * 100) / 100;
        console.log(se);
    }
})

