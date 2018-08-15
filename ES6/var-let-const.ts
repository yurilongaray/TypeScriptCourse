//Para testar apenas alterar entre const, const e const
'use strict'
const a = 1;

function teste() {
    const b = 2;

    console.log(a);

    if(true) {
        const c = 3;

        console.log(b);
    }
    console.log(c);
}

teste();