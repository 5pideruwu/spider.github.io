function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var str = "656F6D";
document.title = "";
async function changetitle() {
    for (let i = 0; i < str.length; i++) {
        document.title += str.charAt(i);
        await sleep(200);
    }
}
changetitle();