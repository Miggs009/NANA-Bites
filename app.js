
// ✅ IMPORT FIRST
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// ✅ DEFINE FIRST
const supabaseUrl = 'https://hxvaxyuvjxydeajnqmyr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4dmF4eXV2anh5ZGVham5xbXlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NTU5MzMsImV4cCI6MjA5MTMzMTkzM30.e2g9aVJFjuOJdEa1dfqwIk3rr-VzN6Fp9DJjFClPcAE'

const supabase = createClient(supabaseUrl, supabaseKey)

// ✅ MAKE IT GLOBAL (IMPORTANT FIX)
window.supabase = supabase
// TAB
window.showTab = function(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.add('hidden'))
  document.getElementById(tab).classList.remove('hidden')
}

// INIT
window.addEventListener('DOMContentLoaded', () => {
  loadProducts()
  loadFlavors()
  loadIngredients()
  loadExpenses()
  loadSales()
  loadDashboard()
  loadProductList()
})

// ================= PRODUCTS =================

window.addProduct = async () => {
  const name = productName.value
  const price = productPrice.value
  const cost = productCost.value

  await supabase.from('products').insert([{ name, price, cost }])

  loadProducts()
  loadProductList()
}

window.editProduct = (id, name, price, cost) => {
  productName.value = name
  productPrice.value = price
  productCost.value = cost
  window.editingId = id
}

window.updateProduct = async () => {
  await supabase
    .from('products')
    .update({
      name: productName.value,
      price: productPrice.value,
      cost: productCost.value
    })
    .eq('id', window.editingId)

  loadProductList()
  loadProducts()
}

window.deleteProduct = async (id) => {
  await supabase.from('products').delete().eq('id', id)
  loadProductList()
  loadProducts()
}

async function loadProductList() {
  const { data } = await supabase.from('products').select('*')

  productList.innerHTML = ''
  data.forEach(p => {
    productList.innerHTML += `
      <li>
        ${p.name} - ₱${p.price}
        <button onclick="editProduct('${p.id}','${p.name}',${p.price},${p.cost})">Edit</button>
        <button onclick="deleteProduct('${p.id}')">Delete</button>
      </li>
    `
  })
}

// ================= DROPDOWNS =================

async function loadProducts() {
  const { data } = await supabase.from('products').select('*')

  productSelect.innerHTML = `<option value="">Select</option>`
  data.forEach(p => {
    productSelect.innerHTML += `<option value="${p.id}">${p.name}</option>`
  })
}

async function loadFlavors() {
  const { data } = await supabase.from('flavors').select('*')

  flavorSelect.innerHTML = `<option value="">No Flavor</option>`
  data.forEach(f => {
    flavorSelect.innerHTML += `<option value="${f.id}">${f.name} (+${f.extra_cost})</option>`
  })
}

// ================= SALES =================

window.addSale = async () => {
  await supabase.rpc('make_sale', {
    p_product_id: productSelect.value,
    p_flavor_id: flavorSelect.value || null,
    p_quantity: parseInt(saleQty.value)
  })

  loadSales()
  loadDashboard()
}

async function loadSales() {
  const { data } = await supabase
    .from('sales')
    .select('*, products(name)')
    .order('created_at', { ascending: false })

  salesList.innerHTML = ''
  data.forEach(s => {
    salesList.innerHTML += `
      <li>
        ${s.products?.name} | Qty: ${s.quantity} | Profit: ${s.profit}
      </li>
    `
  })
}

// ================= INGREDIENTS =================

window.addIngredient = async () => {
  await supabase.from('ingredients').insert([
    { name: ingredientName.value, price: ingredientPrice.value }
  ])
  loadIngredients()
}

async function loadIngredients() {
  const { data } = await supabase.from('ingredients').select('*')

  ingredientList.innerHTML = ''
  data.forEach(i => {
    ingredientList.innerHTML += `<li>${i.name} - ₱${i.price}</li>`
  })
}

// ================= EXPENSES =================

window.addExpense = async () => {
  await supabase.from('expenses').insert([
    { name: expenseName.value, amount: expenseAmount.value }
  ])

  loadExpenses()
  loadDashboard()
}

async function loadExpenses() {
  const { data } = await supabase.from('expenses').select('*')

  expenseList.innerHTML = ''
  data.forEach(e => {
    expenseList.innerHTML += `<li>${e.name} - ₱${e.amount}</li>`
  })
}

// ================= DASHBOARD =================

let chart

async function loadDashboard() {
  const { data: sales } = await supabase.from('sales').select('*')
  const { data: expenses } = await supabase.from('expenses').select('*')

  const totalSales = sales.reduce((a, b) => a + Number(b.total_amount), 0)
  const totalCost = sales.reduce((a, b) => a + Number(b.total_cost), 0)
  const totalProfit = sales.reduce((a, b) => a + Number(b.profit), 0)
  const totalExpenses = expenses.reduce((a, b) => a + Number(b.amount), 0)

  totalSalesEl.textContent = totalSales
  totalCostEl.textContent = totalCost
  totalProfitEl.textContent = totalProfit
  totalExpensesEl.textContent = totalExpenses

  renderChart(sales)
}

// ================= CHART =================

function renderChart(sales) {
  const ctx = document.getElementById('salesChart')

  const labels = sales.map(s =>
    new Date(s.created_at).toLocaleDateString()
  )

  const values = sales.map(s => s.total_amount)

  if (chart) chart.destroy()

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{ label: 'Sales', data: values }]
    }
  })
}