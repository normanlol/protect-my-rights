for (var c in document.querySelectorAll(".scriptOnly")) {
    document.querySelectorAll(".scriptOnly")[c].style = "display:block !important";
}

if (localStorage.getItem("legal") == "y") {
    document.getElementById("start").style.display = "none";
    document.getElementById("home").style.display = "";
    document.getElementById("url").focus();
}

function start() {
    localStorage.setItem("legal", "y")
    document.getElementById("start").style.display = "none";
    document.getElementById("home").style.display = "";
    document.getElementById("url").focus();
}

function getLink(url) {
    document.getElementById("load").style.display = "";
    document.getElementById("home").style.display = "none";
    if (url.startsWith("http://")) {var url = url.split("http://").slice(1).join("http://");}
    if (url.startsWith("https://")) {var url = url.split("https://").slice(1).join("https://");}
    var host = url.split("/")[0];
    switch(host) {
        case "youtube.com":
        case "youtu.be":
        case "www.youtube.com":
            var tk = "https://www.youtube.com/copyright_complaint_form";
            document.getElementById("claim").style.display = "";
            document.getElementById("load").style.display = "none";
            document.getElementById("acceptButton").onclick = function () { accepted("claimAcceptHasLink"); }
            document.getElementById("tkLink").href = tk;
        return;

        case "twitter.com":
        case "t.co":
            var tk = "https://help.twitter.com/forms/dmca";
            document.getElementById("claim").style.display = "";
            document.getElementById("load").style.display = "none";
            document.getElementById("acceptButton").onclick = function () { accepted("claimAcceptHasLink"); }
            document.getElementById("tkLink").href = tk;
        return;

        case "mega.nz":
        case "mega.co.nz":
            var tk = "https://mega.nz/copyrightnotice";
            document.getElementById("claim").style.display = "";
            document.getElementById("load").style.display = "none";
            document.getElementById("acceptButton").onclick = function () { accepted("claimAcceptHasLink"); }
            document.getElementById("tkLink").href = tk;
        return;

        case "snahp.it":
        case "forum.snahp.it":
            var tk = "https://snahp.it/dmca/";
            document.getElementById("claim").style.display = "";
            document.getElementById("load").style.display = "none";
            document.getElementById("acceptButton").onclick = function () { accepted("claimAcceptHasLink"); }
            document.getElementById("tkLink").href = tk;
        return;

        case "drive.google.com":
        case "g.co":
        case "google.com":
            var tk = "https://support.google.com/legal/answer/3110420";
            document.getElementById("claim").style.display = "";
            document.getElementById("load").style.display = "none";
            document.getElementById("acceptButton").onclick = function () { accepted("claimAcceptHasLink"); }
            document.getElementById("tkLink").href = tk;
        return;

        case "fb.com":
        case "facebook.com":
        case "www.fb.com":
        case "www.facebook.com":
            var tk = "https://www.facebook.com/help/contact/1758255661104383";
            document.getElementById("claim").style.display = "";
            document.getElementById("load").style.display = "none";
            document.getElementById("acceptButton").onclick = function () { accepted("claimAcceptHasLink"); }
            document.getElementById("tkLink").href = tk;
        return;

        case "instagram.com":
        case "www.instagram.com":
            var tk = "https://help.instagram.com/contact/372592039493026";
            document.getElementById("claim").style.display = "";
            document.getElementById("load").style.display = "none";
            document.getElementById("acceptButton").onclick = function () { accepted("claimAcceptHasLink"); }
            document.getElementById("tkLink").href = tk;
        return;

        default:
            document.getElementById("claim").style.display = "";
            document.getElementById("load").style.display = "none";
            document.getElementById("acceptButton").onclick = function () { accepted("unknown"); }
            document.getElementById("whoIs").href = "https://whois.domaintools.com/" + host;
        return;
    }
}

function accepted(id) {
    document.getElementById("claim").style.display = "none";
    document.getElementById(id).style.display = "block";
}