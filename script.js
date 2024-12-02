const ctx = document.getElementById('barChart');

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Strawberry Matcha', 'Ube Matcha Latte', 'Matcha Affogato'],
      datasets: [
        {
        label: '# of Orders',
        data: [12, 19, 3],
        backgroundColor: ["pink", "grey", "green"],
        borderColor: ["darkpink", "darkgrey", "darkgreen"],
        borderWidth: 2 }]
    },
  });
