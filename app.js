const supabase = window.supabase.createClient(
 "https://hxvaxyuvjxydeajnqmyr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4dmF4eXV2anh5ZGVham5xbXlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NTU5MzMsImV4cCI6MjA5MTMzMTkzM30.e2g9aVJFjuOJdEa1dfqwIk3rr-VzN6Fp9DJjFClPcAE"
);

let chartInstance;

// ----------------------
// TAB SYSTEM
// ----------------------
function showTab(tab) {
  document.querySelectorAll(".tab").forEach(t => t.classList.add("hidden"));
  document.getElementById(tab).classList.remove("hidden");
}

function initTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      showTab(btn.dataset.tab);
    });
  });

  showTab("dashboard");
}

// ----------------------
// INIT EVENTS
// ----------------------
function initEvents() {
  document.getElementById("addBtn").addEventListener("click", addProduct);
  document.getElementById("sellBtn").addEventListener("click", sellProduct);
}

// ----------------------
// ADD PRODUCT
// ----------------------
async function addProduct() {
  await supabase.from("products").insert([{
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    cost: document.getElementById("cost").value,
    stock: document.getElementById("stock").value
  }]);

  fetchData();
}

// ----------------------
// FETCH DATA
// ----------------------
async function fetchData() {
  const { data: products } = await supabase.from("products").select("*");
  const { data: sales } = await supabase.from("sales").select("*");

  // Inventory
  const inv = document.getElementById("inventoryTable");
  const select = document.getElementById("productSelect");

  inv.innerHTML = "";
  select.innerHTML = "";

  products.forEach(p => {
    inv.innerHTML += `<tr><td>${p.name}</td><td>${p.stock}</td></tr>`;
    select.innerHTML += `<option value="${p.id}">${p.name}</option>`;
  });

  // Stats
  const totalSales = sales.reduce((a,b) => a + (b.qty * b.price), 0);
  const totalProfit = sales.reduce((a,b) => a + b.profit, 0);

  document.getElementById("totalSales").innerText = totalSales;
  document.getElementById("totalProfit").innerText = totalProfit;
  document.getElementById("totalProducts").innerText = products.length;

  renderChart(sales);
}

// ----------------------
// SELL PRODUCT
// ----------------------
async function sellProduct() {
  const id = document.getElementById("productSelect").value;
  const qty = parseInt(document.getElementById("qty").value);

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  const profit = (product.price - product.cost) * qty;

  await supabase.from("sales").insert([{
    product_id: id,
    qty,
    price: product.price,
    profit
  }]);

  await supabase.from("products").update({
    stock: product.stock - qty
  }).eq("id", id);

  fetchData();
}

// ----------------------
// CHART
// ----------------------
function renderChart(sales) {
  const ctx = document.getElementById("chart");

  const labels = sales.map(s => s.id);
  const data = sales.map(s => s.profit);

  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{ label: "Profit", data }]
    }
  });
}

// ----------------------
// START APP
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initEvents();
  fetchData();
});