function accessRoms() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function refreshPage() {
    window.location.reload();
}


function getRom() {
    //let rom = document.getElementsByClassName("anchors")[0].id;
    let rom = document.getElementById("myAnchor").innerHTML;
    //alert(rom);
    console.log(rom);

}