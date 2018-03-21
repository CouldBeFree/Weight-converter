document.getElementById('lbsInput').addEventListener('input', function (e) {

    var lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = lbs/0.002246;
    document.getElementById('kgOutput').innerHTML = lbs/2.2046;
    document.getElementById('ozOutput').innerHTML = lbs*16;
});