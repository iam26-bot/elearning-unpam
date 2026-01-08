function login() {
    var nim = document.getElementById("nim").value;
    var password = document.getElementById("password").value;

    if (nim === "231011402888" && password === "261005") {
        alert("Login berhasil");
        window.location.href = "dashboard.html";
    } else {
        alert("NIM atau Password salah");
    }
}
