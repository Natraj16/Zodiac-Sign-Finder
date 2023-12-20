function findZodiac() {
    var date = parseInt(document.getElementById("birthDate").value);
    var month = parseInt(document.getElementById("birthMonth").value);

    var zodiacSign = "";

    if ((month === 3 && date >= 21) || (month === 4 && date <= 19)) {
        zodiacSign = "Aries";
    } else if ((month === 4 && date >= 20) || (month === 5 && date <= 20)) {
        zodiacSign = "Taurus";
    } else if ((month === 5 && date >= 21) || (month === 6 && date <= 21)) {
        zodiacSign = "Gemini";
    } else if ((month === 6 && date >= 22) || (month === 7 && date <= 23)) {
        zodiacSign = "Cancer";
    } else if ((month === 7 && date >= 24) || (month === 8 && date <= 23)) {
        zodiacSign = "Leo";
    } else if ((month === 8 && date >= 24) || (month === 9 && date <= 22)) {
        zodiacSign = "Virgo";
    } else if ((month === 9 && date >= 23) || (month === 10 && date <= 22)) {
        zodiacSign = "Libra";
    } else if ((month === 10 && date >= 23) || (month === 11 && date <= 22)) {
        zodiacSign = "Scorpio";
    } else if ((month === 11 && date >= 23) || (month === 12 && date <= 20)) {
        zodiacSign = "Sagittarius";
    } else if ((month === 1 && date >= 22) || (month === 1 && date <= 20)) {
        zodiacSign = "Capricorn";
    } else if ((month === 1 && date >= 21) || (month === 2 && date <= 19)) {
        zodiacSign = "Aquarius";
    } else if ((month ===2 && date>=20) || (month === 3 && date <= 20)){
        zodiacSign = "Pisces";
    }

    document.getElementById("zodiac-sign").innerHTML = "Your Zodiac Sign: " + zodiacSign;
}
