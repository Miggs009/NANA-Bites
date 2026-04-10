
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// ✅ FIX: define FIRST before using
const supabaseUrl = 'https://hxvaxyuvjxydeajnqmyr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4dmF4eXV2anh5ZGVham5xbXlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NTU5MzMsImV4cCI6MjA5MTMzMTkzM30.e2g9aVJFjuOJdEa1dfqwIk3rr-VzN6Fp9DJjFClPcAE'

const supabase = createClient(supabaseUrl, supabaseKey)

// ✅ GLOBAL FUNCTIONS (for buttons)
window.showTab = function(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.add('hidden'))
  document.getElementById(tab).classList.remove('hidden')
}

// ================= INVENTORY =================
window.addItem = async function() {
  const name = document.getElementById('itemName').value
  const qty = document.getElementById('itemQty').value

  const { error } = await supabase.from('inventory').insert([{ name, qty }])

  if (error) return console.error(error)

  loadInventory()
}

async function loadInventory() {
  const { data, error } = await supabase.from('inventory').select('*')

  if (error) return console.error(error)

  const list = document.getElementById('inventoryList')
  list.innerHTML = ''

  data.forEach(item => {
    const li = document.createElement('li')
    li.textContent = `${item.name} - ${item.qty}`
    list.appendChild(li)
  })
}

// ================= SALES =================
window.addSale = async function() {
  const item = document.getElementById('saleItem').value
  const amount = document.getElementById('saleAmount').value

  const { error } = await supabase.from('sales').insert([{ item, amount }])

  if (error) return console.error(error)

  loadSales()
  loadChart()
}

async function loadSales() {
  const { data, error } = await supabase.from('sales').select('*')

  if (error) return console.error(error)

  const list = document.getElementById('salesList')
  list.innerHTML = ''

  data.forEach(sale => {
    const li = document.createElement('li')
    li.textContent = `${sale.item} - ${sale.amount}`
    list.appendChild(li)
  })
}

// ================= DASHBOARD =================
let chart

async function loadChart() {
  const { data, error } = await supabase.from('sales').select('*')

  if (error) return console.error(error)

  const labels = data.map(s => s.item)
  const values = data.map(s => s.amount)

  const ctx = document.getElementById('salesChart')

  if (chart) chart.destroy()

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Sales',
        data: values
      }]
    }
  })
}

// ================= INIT =================
window.addEventListener('DOMContentLoaded', () => {
  loadInventory()
  loadSales()
  loadChart()
})