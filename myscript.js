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
    "GRAVEDIGGERS",
    "COBBLESTONE",
    "WHELAN'S",
    "P.MAC’S",
    "TAPPED",
    "RYANS BAR",
    "4 DAME LANE",
    "THE WOOL SHED",
    "SIN É",
    "FLANNERY'S",
    "DOYLE'S",
    "FERRYMAN",
    "LIVING ROOM",
    "MARKET BAR",
    "BERNARD SHAW",
    "JIMMY RABBITTES");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    document.getElementById("message").innerHTML=random;
}
