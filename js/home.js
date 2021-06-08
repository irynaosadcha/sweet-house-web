const values = [
    'Vanilková zmrzlina',
    'Čokoládová zmrzlina',
    'Mangový sorbet',
    'Jahodový dort',
    'Míša dort',
    'Pistáciový cheesecake'
]

function passValues(index) {
    const productName = values[index];
    localStorage.setItem("productName", productName);
    return false;
}
