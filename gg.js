let quest = 1;
let sum = 0;
let idproof = '';

function tr(id) {
    sum++;
    document.getElementById(id).style.backgroundColor = "lightgreen";
}

function tr2(id) {
    if (id != idproof) {
        sum = sum + 0.5;
        document.getElementById(id).style.backgroundColor = "lightgreen";
    }
    else quest--;
    quest = quest - 0.5;
}

function fl(id) {
    document.getElementById(id).style.backgroundColor = "red";
}

function fl2(id) {
    if (id != idproof)
        document.getElementById(id).style.backgroundColor = "red";
    else quest--;
    quest = quest - 0.5;
}

async function calc(id) {
    quest++;
    if (quest == 2) {
        if (id == 'a') tr(id);
        else fl(id);
        await sleep(500);
        document.getElementById('q2').innerHTML = "What is the freezing point of water?";
        document.getElementById('a').innerHTML = "-1";
        document.getElementById('aa').innerHTML = "-5";
        document.getElementById('aaa').innerHTML = "0";
        document.getElementById('aaaa').innerHTML = "1";
    }
    if (quest == 3) {
        if (id == 'aaa') tr(id);
        else fl(id);
        await sleep(500);
        document.getElementById('q2').innerHTML = "What is the longest river in the world?";
        document.getElementById('a').innerHTML = "Amazon";
        document.getElementById('aa').innerHTML = "Nile";
        document.getElementById('aaa').innerHTML = "Mississippi";
        document.getElementById('aaaa').innerHTML = "Dvina";
    }
    if (quest == 4) {
        if (id == 'aa') tr(id);
        else fl(id);
        await sleep(500);
        document.getElementById('q2').innerHTML = "How many chromosomes are in the human genome?";
        document.getElementById('a').innerHTML = "48";
        document.getElementById('aa').innerHTML = "47";
        document.getElementById('aaa').innerHTML = "46";
        document.getElementById('aaaa').innerHTML = "45";
    }
    if (quest == 5) {
        if (id == 'aaa') tr(id);
        else fl(id);
        await sleep(500);
        document.getElementById('q2').innerHTML = "Which of these characters is a friend with Harry Potter?";
        document.getElementById('a').innerHTML = "Link";
        document.getElementById('aa').innerHTML = "Basilisk";
        document.getElementById('aaa').innerHTML = "Hedwig";
        document.getElementById('aaaa').innerHTML = "Hermione";
    }
    if (quest == 6) {
        if (id == 'aaaa' || id == 'aaa') tr2(id);
        else fl2(id);
        idproof = id;
    }
    if (quest == 6.5) {
        if (id == 'aaaa' || id == 'aaa') tr2(id);
        else fl2(id);
        await sleep(500);
        document.getElementById('q2').innerHTML = "What is the capital of Canada?";
        document.getElementById('a').innerHTML = "Minsk";
        document.getElementById('aa').innerHTML = "Ottawa";
        document.getElementById('aaa').innerHTML = "Tokyo";
        document.getElementById('aaaa').innerHTML = "Washington";

    }
    if (quest == 7) {
        if (id == 'aa') tr(id);
        else fl(id);
        await sleep(500);
        document.getElementById('q2').innerHTML = "What is the Jewish New Year called?";
        document.getElementById('a').innerHTML = "Rosh Hashanah";
        document.getElementById('aa').innerHTML = "New Year";
        document.getElementById('aaa').innerHTML = "Hanukkah";
        document.getElementById('aaaa').innerHTML = "Kwanzaa";
    }
    if (quest == 8) {
        if (id == 'a') tr(id);
        else fl(id);
        await sleep(500);
        document.getElementById('q2').innerHTML = "Your result:";
        document.getElementById('a').innerHTML = "Your scoore:";
        document.getElementById('aa').innerHTML = sum;
        if (sum == 7) document.getElementById('aaa').innerHTML = "Perfect";
        else if (sum >= 5) document.getElementById('aaa').innerHTML = "Good";
        else if (sum >= 3) document.getElementById('aaa').innerHTML = "Bad";
        else document.getElementById('aaa').innerHTML = "Awful";
        document.getElementById('aaaa').innerHTML = "Retry?";
    }
    if (quest >= 9) {
        if (id == 'aaaa') {
            quest = 1;
            sum = 0;
            idproof = '';
            document.getElementById('q2').innerHTML = "How many planets are in the solar system?";
            document.getElementById('a').innerHTML = "8";
            document.getElementById('aa').innerHTML = "9";
            document.getElementById('aaa').innerHTML = "10";
            document.getElementById('aaaa').innerHTML = "7";
            document.getElementById('q1').innerHTML = "Question " + quest + "/7";
        }
    }
    if (quest < 8) {
        document.getElementById('q1').innerHTML = "Question " + Math.floor(quest) + "/7";
    }
    else document.getElementById('q1').innerHTML = "Quiz was complited!!!";
    if (quest != 5.5) document.getElementById(id).style.backgroundColor = "wheat";
    if (quest == 6) {
        document.getElementById('aaaa').style.backgroundColor = "wheat";
        document.getElementById('aaa').style.backgroundColor = "wheat";
        document.getElementById('aa').style.backgroundColor = "wheat";
        document.getElementById('a').style.backgroundColor = "wheat";
    }//альтернатива?
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}