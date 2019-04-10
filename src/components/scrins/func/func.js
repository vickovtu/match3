const randomInteger = (min, max) => {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
}

export const GenerateMap = () => {
    var cats = ['cat0', 'cat1', 'cat2', 'cat3'];
    var mapp = [];
    for (var x = 0; x < 63; x++) {
        let rang = randomInteger(0, 2);
        mapp.push(cats[rang])
    }
    return mapp;
}