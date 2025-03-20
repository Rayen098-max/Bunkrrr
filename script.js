function calculateAttendance() {
    let totalLectures = parseInt(document.getElementById('totalLectures').value);
    let attendedLectures = parseInt(document.getElementById('attendedLectures').value);

    if (isNaN(totalLectures) || isNaN(attendedLectures) || totalLectures < attendedLectures || totalLectures <= 0) {
        alert("Please enter valid numbers!");
        return;
    }

    let attendancePercent = (attendedLectures / totalLectures) * 100;
    document.getElementById('attendancePercent').textContent = attendancePercent.toFixed(2);

    let quote = getQuote(attendancePercent);
    document.getElementById('attendanceQuote').textContent = quote;

    document.getElementById('chartContainer').style.display = "none";
}

function getQuote(attendance) {
    if (attendance >= 90) return "Waah Scholar JI aap Toh Chaaa gaye guru! 🤓";
    if (attendance >= 80) return "Bete Moj Kardi! 🎉";
    if (attendance >= 75) return "Baal Baal Bach Gaye Beta! 😰";
    if (attendance >= 70) return "Bas 19-20 ka fark hai! 🤏";
    if (attendance >= 60) return "Ye kya hua, kaise hua, kab hua, kyu hua? 🤯";
    if (attendance >= 50) return "Doctor certificate ki tayyari kar le bete! 🏥";
    return "Aii Zavliiiii! 📉";
}

function showSkipChart() {
    generateChart("Skipping Analysis", false);
}

function showAttendChart() {
    generateChart("Recovery Analysis", true);
}

function generateChart(title, isAttended) {
    let totalLectures = parseInt(document.getElementById('totalLectures').value);
    let attendedLectures = parseInt(document.getElementById('attendedLectures').value);

    let table = document.getElementById('chartTable');
    table.innerHTML = `<tr><th>Days ${isAttended ? "Attended" : "Skipped"}</th><th>New Attendance %</th></tr>`;

    for (let i = 1; i <= 10; i++) {
        let newTotalLectures = totalLectures + i;
        let newAttendedLectures = isAttended ? attendedLectures + i : attendedLectures;
        let newAttendance = (newAttendedLectures / newTotalLectures) * 100;

        let row = table.insertRow();
        row.insertCell(0).textContent = i;
        row.insertCell(1).textContent = newAttendance.toFixed(2) + "%";
    }

    document.getElementById('chartTitle').textContent = title;
    document.getElementById('chartContainer').style.display = "block";
}

function resetApp() {
    document.getElementById('totalLectures').value = "";
    document.getElementById('attendedLectures').value = "";
    document.getElementById('attendancePercent').textContent = "--";
    document.getElementById('attendanceQuote').textContent = "";
    document.getElementById('chartContainer').style.display = "none";
}
