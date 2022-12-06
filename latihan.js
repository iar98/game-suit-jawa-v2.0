//pilihan computer
function  getpilihankomputer(){
    const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
        return 'semut';
    
}

//rumus game
function gethasil(comp, player){
    if( player == comp )  return 'SERI!';

    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';

    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';

    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
    
    
}

const pgajah = document.querySelector('.gajah');
pgajah.addEventListener('click', function(){
    const pilihankomputer = getpilihankomputer();
    const pilihanplayer = pgajah.className;
    const hasil = gethasil(pilihankomputer, pilihanplayer);

    const imgkomputer = document.querySelector('.img-komputer');
    imgkomputer.setAttribute('src','img/'+ pilihankomputer + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

//contoh program mengulang dengan copy paste program yang di buat pertama kali
// const porang = document.querySelector('.orang');
// porang.addEventListener('click', function(){
//     const pilihankomputer = getpilihankomputer();
//     const pilihanplayer = porang.className;
//     const hasil = gethasil(pilihankomputer, pilihanplayer);

//     const imgkomputer = document.querySelector('.img-komputer');
//     imgkomputer.setAttribute('src','img/'+ pilihankomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const psemut = document.querySelector('.semut');
// psemut.addEventListener('click', function(){
//     const pilihankomputer = getpilihankomputer();
//     const pilihanplayer = psemut.className;
//     const hasil = gethasil(pilihankomputer, pilihanplayer);

//     const imgkomputer = document.querySelector('.img-komputer');
//     imgkomputer.setAttribute('src','img/'+ pilihankomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

//contoh program DRY
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
       const pilihankomputer=getpilihankomputer();
       const pilihanplayer=pil.className;
       const hasil = gethasil(pilihankomputer,pilihanplayer);

       const imgkomputer = document.querySelector('.img-komputer');
       imgkomputer.setAttribute('src','img/'+pilihankomputer+'.png');

       const info = document.querySelector('.info');
       info.innerHTML = hasil;
    });
});