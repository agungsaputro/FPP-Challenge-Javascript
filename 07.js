  
function count() {
    const str = `Aku ingin begini
    Aku ingin begitu
    Ingin ini itu banyak sekali
    
    Semua semua semua
    Dapat dikabulkan
    Dapat dikabulkan
    Dengan kantong ajaib
    
    Aku ingin terbang bebas
    Di angkasa
    Hei… baling baling bambu
    
    La... la... la...
    Aku sayang sekali
    Doraemon
    
    La... la... la...
    Aku sayang sekali`

    const countAku = str.match(/aku/gi).length
    const countIngin = str.match(/ingin/gi).length
    const countDapat = str.match(/dapat/gi).length

    return `aku = ${countAku}, ingin = ${countIngin}, dapat = ${countDapat}`
}

console.log(count())
