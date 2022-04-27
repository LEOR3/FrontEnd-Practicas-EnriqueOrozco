

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value; 
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`; 
    fetch(url).then((res) => { 
        if (res.status != "200") { 
            console.log(res);
            let warning="that pokemon does not exist !"; 
            pokeImage("https://ak.picdn.net/shutterstock/videos/19366936/thumb/10.jpg", warning) 
        }
        else {
            return res.json();
        }
    }).then((data) => { 
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other.home.front_default; 
            let n=data.id;
            let nomb=data.name;
            let tip = data.types[0].type.name;
            let hp = data.stats[0].base_stat;
            let atck = data.stats[1].base_stat;
            let dfnse = data.stats[2].base_stat;
            let m1 = data.moves[1].move.name;
            let m2 = data.moves[2].move.name;
            let m3 = data.moves[3].move.name;
            let wg = data.weight;
            let hg =data.height;
            let warning=""; 
            pokeImage(pokeImg, warning);
            num(n);
            names(nomb);
            types(tip);
            stats(hp, atck, dfnse);
            moves(m1,m2,m3);
            inf(wg, hg);
            console.log(pokeImg);
            console.log(n);
            console.log(tip);
        }
    });
}

const pokeImage = (url, w) => { 
    const pokePhoto = document.getElementById("pokeImg"); 
    pokePhoto.src = url; 
    const warn = document.getElementById("warning"); 
    warn.innerHTML = w; 
}

function num(n){
    const number = document.getElementById("Num"); 
    number.innerHTML = n;
}

const nam = document.getElementById("Name"); 
function names(na){
    nam.innerHTML = na;
}

function types(t){
    const tp = document.getElementById("Type"); 
    tp.innerHTML = t;
}

const stats = (h, a, d) => { 
    const st = document.getElementById("hp"); 
    st.innerHTML = h;
    const st2 = document.getElementById("atck"); 
    st2.innerHTML = a;
    const st3 = document.getElementById("dfnse"); 
    st3.innerHTML = d;
}

const moves = (m1, m2, m3) => { 
    const mo = document.getElementById("1"); 
    mo.innerHTML = m1;
    const mo2 = document.getElementById("2"); 
    mo2.innerHTML = m2;
    const mo3 = document.getElementById("3"); 
    mo3.innerHTML = m3;
}

const inf = (wg, hg) => { 
    const wo = document.getElementById("Weight"); 
    wo.innerHTML = wg;
    const wo2 = document.getElementById("Height"); 
    wo2.innerHTML = hg;
}



