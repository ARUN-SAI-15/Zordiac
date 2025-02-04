
function getZodiacSign() {
    const birthDateInput = document.getElementById("birthDate").value;
    const birthDate = new Date(birthDateInput);

    if (!birthDateInput) {
        document.getElementById("result").textContent = "Please enter a valid birthdate!";
        return;
    }

    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1; // Months are zero-indexed, so add 1

    let zodiacSign = "";
    let zodiacImage = "";

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        zodiacSign = "Aquarius";
        zodiacImage = "./aquaris.png";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        zodiacSign = "Pisces";
        zodiacImage = "./pisces.png";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        zodiacSign = "Aries";
        zodiacImage = "Aries.png";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        zodiacSign = "Taurus";
        zodiacImage = "Taurus.png";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        zodiacSign = "Gemini";
        zodiacImage = "Gemini.png";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        zodiacSign = "Cancer";
        zodiacImage = "Cancer.png";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        zodiacSign = "Leo";
        zodiacImage = "Leo.png";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        zodiacSign = "Virgo";
        zodiacImage = "Virgo.png";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        zodiacSign = "Libra";
        zodiacImage = "Libra.png";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        zodiacSign = "Scorpio";
        zodiacImage = "Scorpio.png";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        zodiacSign = "Sagittarius";
        zodiacImage = "Sagittarius.png";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        zodiacSign = "Capricorn";
        zodiacImage = "Capricorn.png";
    }

    document.getElementById("result").textContent = `Your zodiac sign is: ${zodiacSign}`;
    const zodiacImageElement = document.getElementById("zodiacImage");
    zodiacImageElement.src = zodiacImage;
    zodiacImageElement.style.display = "block";
}


