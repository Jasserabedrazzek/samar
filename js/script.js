async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function Zoom() {
    document.querySelector('.imgZoom').style.left = '50%';
}
function hide() {
    document.querySelector('.imgZoom').style.left = '-500px';
}
window.onload = async  () => {
    await sleep(1000);
    document.querySelector('#name').style.opacity = '1';
    await sleep(2500);
    document.querySelector('#name').style.opacity = '0';
    await sleep(1500);
    document.querySelector('.nav').style.top = '0';
    document.querySelector('.profile').style.left = '0';
    document.querySelector('.img').style.left = '0';
    await sleep(1000);
    TextA()
}

async function TextA() {
    var t = "I break down complex user experience problems <br> to create integrity focussed solutions <br> that connect billions of people.";
    res = '';
    for (var i = 0; i <t.length; i++) {
        res += t[i];
        document.querySelector('p').innerHTML = res;
        await sleep(20);
    }
}
