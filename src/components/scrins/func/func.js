const randomInteger = (min, max) => {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
}

export const GenerateMap = () => {
    var cats = ['cat0', 'cat1', 'cat2', 'cat3', 'cat4', 'cat5'];
    var mapp = [];
    for (var y = 0; y < 9 ; y ++) {
        mapp[y] = []
        for (var x = 0; x < 7; x++) {
            let rang = randomInteger(0, 5);
            mapp[y].push(cats[rang])
        }
    }
    return mapp;
}