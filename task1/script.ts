
// Example of dynamic updates using TypeScript
type Stats = {
    revenue: number;
    orders: number;
    dineIn: number;
    takeAway: number;
};

function updateStats(stats: Stats) {
    document.getElementById('revenue')!.textContent = stats.revenue.toString();
    document.getElementById('orders')!.textContent = stats.orders.toString();
    document.getElementById('dine-in')!.textContent = stats.dineIn.toString();
    document.getElementById('take-away')!.textContent = stats.takeAway.toString();
}

// Simulating a data update
setTimeout(() => {
    updateStats({ revenue: 2150, orders: 380, dineIn: 230, takeAway: 140 });
}, 3000);
