document.getElementById('output').style.visibility = 'hidden';

document.getElementById('lbsInput').addEventListener('input', function (e) {

    var lbs = e.target.value;
    document.getElementById('output').style.visibility = 'visible';
    document.getElementById('gramsOutput').innerHTML = lbs/0.002246;
    document.getElementById('kgOutput').innerHTML = lbs/2.2046;
    document.getElementById('ozOutput').innerHTML = lbs*16;
});