function GetValue()
{
    var myarray= new Array(
    "PYG",
    "THE LONG HAUL",
    "DEVITTS",
    "HOGANS",
    "GROGANS",
    "THE CAMDEN",
    "NO NAME BAR",
    "CASSIDYS",
    "MARY'S BAR",
    "THE GRAVEDIGGERS",
    "THECOBBLESTONE",
    "WHELAN'S",
    "P.MAC’S",
    "FLANNERY'S",
    "MARKET BAR",
    "THE BERNARD SHAW",
    "JIMMY RABBITTES");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    document.getElementById("message").innerHTML=random;
}
