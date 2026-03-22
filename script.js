function fcfs() {
    let input = document.getElementById("burst").value;
    let arr = input.split(",").map(Number);

    let wt = 0, total = 0;
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        result += "P" + (i+1) + " ";
        total += wt;
        wt += arr[i];
    }

    document.getElementById("output").innerHTML =
        "Order: " + result + "<br>Avg Waiting Time: " + (total/arr.length);
}

function fifo() {
    let input = document.getElementById("pages").value;
    let pages = input.split(",");
    let frames = [];
    let faults = 0;

    pages.forEach(p => {
        if (!frames.includes(p)) {
            if (frames.length >= 3) frames.shift();
            frames.push(p);
            faults++;
        }
    });

    document.getElementById("output").innerHTML =
        "Page Faults: " + faults;
}

function deadlock() {
    document.getElementById("output").innerHTML =
        "Deadlock Detected (Simulation Example)";
}