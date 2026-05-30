let amigo={
    nome:'Jose',
    peso:'88',
    engordar(p=0){
        amigo.peso= Number(amigo.peso)+p
        if (amigo.peso>80){
            console.log(`Obeso, está pesando ${amigo.peso} kilos.`)
        } else {
            console.log(`Está no peso ideal, tem ${amigo.peso} kilos.`)
        }
    }
}
amigo.engordar(30)