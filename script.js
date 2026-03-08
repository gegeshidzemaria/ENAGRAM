document.getElementById("compareBtn").addEventListener("click", compareTexts);


function compareTexts() {
    let textA = document.getElementById("textA").value.trim().split(/\s+/);
    let textB = document.getElementById("textB").value.trim().split(/\s+/);

    let result = "";
    let max = Math.max(textA.length, textB.length);

    for (let i = 0; i < max; i++) {
        if (textA[i] === textB[i]) {
            result += (textA[i] || "") + " ";
        } else {
            if (textA[i]) result += `<span class="removed">${textA[i]}</span> `;
            if (textB[i]) result += `<span class="added">${textB[i]}</span> `;
        }
    }
    document.getElementById("result").innerHTML = result;
}

function resetTexts() {
    const textA = document.getElementById("textA");
    const textB = document.getElementById("textB");


    textA.value = "";
    textB.value = "";

  
    textA.placeholder = "დაწერე ტექსტი...";
    textB.placeholder = "დაწერე ტექსტი...";


    document.getElementById("result").innerHTML = "";
}


function convertToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const text = document.getElementById("textA").value;
    doc.text(text, 10, 10);
    doc.save("text.pdf");
}


function changeLanguage() {
    const lang = document.getElementById("languageSelect").value;
    console.log("Language changed to:", lang);
}


function swapTextAreas() {
    const textA = document.getElementById("textA");
    const textB = document.getElementById("textB");


    const tempValue = textA.value;
    textA.value = textB.value;
    textB.value = tempValue;


    const tempPlaceholder = textA.placeholder;
    textA.placeholder = textB.placeholder;
    textB.placeholder = tempPlaceholder;
}


function toggleMenu() {
    const menu = document.querySelector('.sidebar .menu');
    menu.classList.toggle('active');
}

