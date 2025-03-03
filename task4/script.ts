const transactions = [
    { name: "Aokiji", date: "28 Feb 2023 • 06:23 PM", amount: "+$13.00", type: "received", img: "aokiji.jpg" },
    { name: "Kizaru", date: "28 Feb 2023 • 06:23 PM", amount: "-$9.00", type: "outgoing", img: "kizaru.jpg" },
    { name: "Akainu", date: "28 Feb 2023 • 06:23 PM", amount: "+$20.00", type: "received", img: "akainu.jpg" }
];

const container = document.querySelector(".container");

transactions.forEach(tx => {
    const div = document.createElement("div");
    div.className = "transaction";
    div.innerHTML = `
        <img src="${tx.img}" alt="${tx.name}">
        <div class="details">
            <h3>${tx.name}</h3>
            <p>${tx.date}</p>
        </div>
        <div class="amount ${tx.type}">${tx.amount}</div>
        <p class="status">${tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}</p>
    `;
    if (container) {
        container.appendChild(div);
    }
});