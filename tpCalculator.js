function showDiv() {
    document.getElementById('tipCalculator').style.display = "block";
}

function calculateTip() {
    var billTotal = document.getElementById("netPrice").value;
    var serviceQuality = document.getElementById("qualityOfService").value;

    if(billTotal === "" || serviceQuality === "none") {
        alert("Please enter both your bill total and quality of service");
        return;
    };

    if(document.getElementById("headcount").value === "" || 0) {
        var numberOfPeople = 1;
    } else {
        var numberOfPeople = document.getElementById("headcount").value;
    }

    var tipTotal = (billTotal * serviceQuality);
    tipTotal = Math.round(tipTotal * 100) / 100;
    tipTotal = tipTotal.toFixed(2);
    document.getElementById("total_tip").innerHTML = tipTotal;

    var completeTotal = (+billTotal + +tipTotal);
    completeTotal = completeTotal.toFixed(2);
    document.getElementById("complete_total").innerHTML = completeTotal;

    var individualTotal = (+completeTotal / +numberOfPeople);
    individualTotal = individualTotal.toFixed(2);
    document.getElementById("individual_total").innerHTML = individualTotal;

    var individualTip = (billTotal * serviceQuality) / numberOfPeople;
    individualTip = Math.round(individualTip * 100) / 100;
    individualTip = individualTip.toFixed(2);
    document.getElementById("individual_tip").innerHTML = individualTip;

    document.getElementById("tipTotal").style.display = "block";
}

var calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", function() {
    calculateTip();
    document.getElementById('totalSummary').style.display = "block";
});