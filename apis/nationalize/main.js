async function getCountry(){
    const answer = await fetch("https://api.nationalize.io/?name=vladimir");
    if(!answer.OK){
        let oops = "ERROR 404";
        alert(oops);
        throw new Error(oops);
    }
    const name = answer.json();

    return name;
}

function displayName(n) {
    document.getElementById("myName").innerHTML = n.country[0].country_id;
    document.getElementById("myName2").innerHTML = n.country[1].country_id;
    document.getElementById("myName3").innerHTML = n.country[2].country_id;
}

getCountry().then(displayName);