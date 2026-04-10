
// ✅ IMPORT FIRST
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// ✅ DEFINE FIRST
const supabaseUrl = 'https://hxvaxyuvjxydeajnqmyr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4dmF4eXV2anh5ZGVham5xbXlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NTU5MzMsImV4cCI6MjA5MTMzMTkzM30.e2g9aVJFjuOJdEa1dfqwIk3rr-VzN6Fp9DJjFClPcAE'

const supabase = createClient(supabaseUrl, supabaseKey)

// ================= TAB SYSTEM =================
window.showTab = function(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.add('hidden'))
  document.getElementById(tab).classList.remove('hidden')
}

// ================= INIT =================
window.addEventListener('DOMContentLoaded', () => {
  loadProducts()
  loadFlavors()
  loadIngredients()
  loadExpenses()
  loadSales()
  loadDashboard()
})

// ================= DROPDOWNS =================
async function loadProducts() {
  const { data } = await supabase.from('products').select('*')

  const select = document.getElementById('productSelect')
  select.innerHTML = `<option value="">Select Product</option>`

  data?.forEach(p => {
    const opt = document.createElement('option')
    opt.value = p.id
    opt.textContent = `${p.name}`
    select.appendChild(opt)
  })
}

async function loadFlavors() {
  const { data } = await supabase.from('flavors').select('*')

  const select = document.getElementById('flavorSelect')
  select.innerHTML = `<option value="">No Flavor</option>`

  data?.forEach(f => {
    const opt = document.createElement('option')
    opt.value = f.id
    opt.textContent = `${f.name} (+${f.extra_cost})`
    select.appendChild(opt)
  })
}

// ================= SALES =================
window.addSale = async function () {
  const productId = document.getElementById('productSelect').value
  const flavorId = document.getElementById('flavorSelect').value || null
  const qty = parseInt(document.getElementById('saleQty').value)

  if (!productId || !qty) {
    alert("Select product and quantity")
    return
  }

  const { error } = await supabase.rpc('make_sale', {
    p_product_id: productId,
    p_flavor_id: flavorId,
    p_quantity: qty
  })

  if (error) {
    console.error(error)
    alert(error.message)
    return
  }

  loadSales()
  loadDashboard()
}

// ================= SALES LIST =================
async function loadSales() {
  const { data } = await supabase
    .from('sales')
    .select('*, products(name)')
    .order('created_at', { ascending: false })

  const list = document.getElementById('salesList')
  list.innerHTML = ''

  data?.forEach(s => {
    const li = document.createElement('li')
    li.className = "p-2 border-b"
    li.textContent =
      `Product: ${s.products?.name || ''} | Qty: ${s.quantity} | Profit: ${s.profit}`
    list.appendChild(li)
  })
}

// ================= INGREDIENTS =================
window.addIngredient = async function () {
  const name = document.getElementById('ingredientName').value
  const price = document.getElementById('ingredientPrice').value

  const { error } = await supabase.from('ingredients').insert([{ name, price }])

  if (error) return console.error(error)

  loadIngredients()
}

async function loadIngredients() {
  const { data } = await supabase.from('ingredients').select('*')

  const list = document.getElementById('ingredientList')
  list.innerHTML = ''

  data?.forEach(i => {
    const li = document.createElement('li')
    li.textContent = `${i.name} - ₱${i.price}`
    list.appendChild(li)
  })
}

// ================= EXPENSES =================
window.addExpense = async function () {
  const name = document.getElementById('expenseName').value
  const amount = document.getElementById('expenseAmount').value

  const { error } = await supabase.from('expenses').insert([{ name, amount }])

  if (error) return console.error(error)

  loadExpenses()
  loadDashboard()
}

async function loadExpenses() {
  const { data } = await supabase.from('expenses').select('*')

  const list = document.getElementById('expenseList')
  list.innerHTML = ''

  data?.forEach(e => {
    const li = document.createElement('li')
    li.textContent = `${e.name} - ₱${e.amount}`
    list.appendChild(li)
  })
}

// ================= DASHBOARD =================
let chart

async function loadDashboard() {
  const { data: sales } = await supabase.from('sales').select('total_amount,total_cost,profit')
  const { data: expenses } = await supabase.from('expenses').select('amount')

  const totalSales = sales?.reduce((a, b) => a + Number(b.total_amount), 0) || 0
  const totalCost = sales?.reduce((a, b) => a + Number(b.total_cost), 0) || 0
  const totalProfit = sales?.reduce((a, b) => a + Number(b.profit), 0) || 0
  const totalExpenses = expenses?.reduce((a, b) => a + Number(b.amount), 0) || 0

  document.getElementById('totalSales').textContent = totalSales
  document.getElementById('totalCost').textContent = totalCost
  document.getElementById('totalProfit').textContent = totalProfit
  document.getElementById('totalExpenses').textContent = totalExpenses

  renderChart(sales)
}

// ================= CHART =================
function renderChart(sales) {
  const labels = sales?.map(s => new Date(s.created_at).toLocaleDateString()) || []
  const values = sales?.map(s => s.total_amount) || []

  const ctx = document.getElementById('salesChart')

  if (chart) chart.destroy()

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Daily Sales',
        data: values
      }]
    }
  })
}