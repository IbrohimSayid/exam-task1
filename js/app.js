const btn = document.getElementById("btn");
btn.onclick = () => {
    const dayVal = document.getElementById("day").value;
    const monthVal = document.getElementById("month").value;
    const yearVal = document.getElementById("year").value;
    const currentDate = new Date();
    const birthDate = new Date(yearVal, monthVal - 1, dayVal);
    const differenceInMs = currentDate - birthDate;
    const none = "--"

    const ageInYears = Math.floor(differenceInMs / (1000 * 60 * 60 * 24 * 365.25));
    const monthsLeft = Math.floor((differenceInMs % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const daysLeft = Math.floor((differenceInMs % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

    if (yearVal > 2024) {
        document.getElementById("year").classList.remove("input");
        document.getElementById("year").classList.add("error-class");
        document.getElementById("year_span").textContent = none;
    } else {
        document.getElementById("year_span").textContent = ageInYears;
    }

    if (monthVal > 12) {
        document.getElementById("month").classList.remove("input");
        document.getElementById("month").classList.add("error-class");
        document.getElementById("month_span").textContent = none;
    } else {
        document.getElementById("month_span").textContent = monthsLeft;
    }

    if (dayVal > 31) {
        document.getElementById("day").classList.remove("input");
        document.getElementById("day").classList.add("error-class");
        document.getElementById("day_span").textContent = none;
    } else {
        document.getElementById("day_span").textContent = daysLeft;
    }
};