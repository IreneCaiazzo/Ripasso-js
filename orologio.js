function orologio() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    //formattazione
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    //iterare la funzione ogni secondo
    setTimeout(orologio, 1000)

    //pulisce la console prima di stampare
    // console.clear();
    //stampa orologio in console
    // console.log(hours + ":" + minutes + ":" + seconds);

    document.getElementById("#watch").innerHTML = orologio(hours + ":" + minutes + ":" + seconds);
}

//chiamare la funzione appena apro la pagina
orologio()
