const container = document.getElementById("container");

// Random array banane ka function
function resetArray() {
    container.innerHTML = "";
    for (let i = 0; i < 30; i++) {
        const value = Math.floor(Math.random() * 250) + 5;
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value}px`;
        container.appendChild(bar);
    }
}

// Delay ke liye helper function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Bubble Sort Logic with Animation
async function bubbleSort() {
    const bars = document.querySelectorAll(".bar");
    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            bars[j].style.backgroundColor = "red"; // Checking
            bars[j + 1].style.backgroundColor = "red";

            let val1 = parseInt(bars[j].style.height);
            let val2 = parseInt(bars[j + 1].style.height);

            if (val1 > val2) {
                await sleep(50);
                bars[j].style.height = `${val2}px`;
                bars[j + 1].style.height = `${val1}px`;
            }

            bars[j].style.backgroundColor = "cyan"; // Reset color
            bars[j + 1].style.backgroundColor = "cyan";
        }
        bars[bars.length - i - 1].style.backgroundColor = "lightgreen"; // Sorted
    }
}

// Pehli baar array load karna
resetArray();
