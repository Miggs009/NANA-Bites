
// ✅ IMPORT FIRST
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// ✅ DEFINE FIRST
const supabaseUrl = 'https://hxvaxyuvjxydeajnqmyr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4dmF4eXV2anh5ZGVham5xbXlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NTU5MzMsImV4cCI6MjA5MTMzMTkzM30.e2g9aVJFjuOJdEa1dfqwIk3rr-VzN6Fp9DJjFClPcAE'


const supabase = createClient(supabaseUrl, supabaseKey)

// make global
window.supabase = supabase

// ================= STATE =================
let selectedProductId = null
let selectedProductPrice = 0
let editingIngredientId = null
let editingSaleId = null
let editingStockId = null
let chart = null

// ================= TAB =================
window.showTab = function(tab){
  document.querySelectorAll('.tab').forEach(t=>t.classList.add('hidden'))
  document.getElementById(tab).classList.remove('hidden')
}

// ================= INIT =================
window.addEventListener('DOMContentLoaded', ()=>{
  loadProducts()
  loadProductList()
  loadSales()
  loadDashboard()
  loadStock()
})

// ================= PRODUCTS =================

window.addProduct = async ()=>{
  if(!productName.value || !productPrice.value) return

  await supabase.from('products').insert([{
    name: productName.value,
    price: productPrice.value
  }])

  productName.value=''
  productPrice.value=''

  loadProductList()
  loadProducts()
}

window.editProduct = (id,name,price)=>{
  productName.value=name
  productPrice.value=price
  window.editingId=id
}

window.updateProduct = async ()=>{
  if(!window.editingId) return

  await supabase.from('products')
    .update({
      name:productName.value,
      price:productPrice.value
    })
    .eq('id',window.editingId)

  window.editingId=null
  productName.value=''
  productPrice.value=''

  loadProductList()
  loadProducts()
}

window.deleteProduct = async (id)=>{
  await supabase.from('products').delete().eq('id',id)
  loadProductList()
}

// ================= PRODUCT LIST =================

window.selectProduct = (id,name,price)=>{
  selectedProductId = id
  selectedProductPrice = price

  productTitle.textContent = name
  productDetails.classList.remove('hidden')

  loadIngredients()
  loadStockOptions() // 🔥 NEW
}

async function loadProductList(){
  const {data,error} = await supabase.from('products').select('*')

  if(error){
    console.error(error)
    return
  }

  productList.innerHTML=''

  for(let p of (data||[])){
    const cost = await getProductCost(p.id)
    const profit = p.price - cost

    productList.innerHTML += `
      <tr class="border-b hover:bg-gray-50">
        <td class="p-3">${p.name}</td>
        <td class="p-3">₱${p.price}</td>
        <td class="p-3">₱${cost.toFixed(2)}</td>
        <td class="p-3 text-blue-600 font-bold">₱${profit.toFixed(2)}</td>
        <td class="p-3 space-x-2">
          <button onclick="selectProduct('${p.id}','${p.name}',${p.price})" class="bg-green-500 px-2 text-white rounded">View</button>
          <button onclick="editProduct('${p.id}','${p.name}',${p.price})" class="bg-blue-500 px-2 text-white rounded">Edit</button>
          <button onclick="deleteProduct('${p.id}')" class="bg-red-500 px-2 text-white rounded">Delete</button>
        </td>
      </tr>`
  }
}

// ================= COST CALCULATION =================

async function getProductCost(productId){
  const {data} = await supabase
    .from('ingredients')
    .select('cost, usage_per_product, stock_id, stocks(cost_per_unit, qty)')
    .eq('product_id', productId)

  return (data || []).reduce((total, item)=>{

    if(item.stock_id){
      const totalCost = Number(item.stocks?.cost_per_unit || 0)
      const totalQty = Number(item.stocks?.qty || 0)

      const costPerPiece = totalQty > 0 ? totalCost / totalQty : 0

      return total + (costPerPiece * Number(item.usage_per_product || 1))
    }else{
      return total + Number(item.cost || 0)
    }

  },0)
}

// ================= STOCK OPTIONS =================

async function loadStockOptions(){
  const {data,error} = await supabase.from('stocks').select('*')

  if(error){
    console.error(error)
    return
  }

  stockSelect.innerHTML = `<option value="">Select stock</option>`

  ;(data || []).forEach(s=>{
    const costPerPiece = s.qty > 0 ? (s.cost_per_unit / s.qty) : 0

    stockSelect.innerHTML += `
      <option value="${s.id}">
        ${s.name} (₱${costPerPiece.toFixed(2)} per piece | Qty: ${s.qty})
      </option>`
  })
}

// ================= INGREDIENTS =================

window.addIngredient = async ()=>{
  if(!selectedProductId) return alert("Select product first")

  const stockId = stockSelect.value
  const usage = Number(usageQty.value || 1)
  const name = ingredientName.value
  const cost = Number(ingredientCost.value || 0)

  // ❗ VALIDATION
  if(!stockId && !cost){
    return alert("Select stock OR enter cost")
  }

  if(editingIngredientId){
    await supabase.from('ingredients')
      .update({
        name: name,
        cost: stockId ? null : cost,
        stock_id: stockId || null,
        usage_per_product: usage
      })
      .eq('id', editingIngredientId)

    editingIngredientId = null
    ingredientBtn.textContent = "Add"

  }else{
    await supabase.from('ingredients').insert([{
      product_id: selectedProductId,
      name: name,
      cost: stockId ? null : cost,
      stock_id: stockId || null,
      usage_per_product: usage
    }])
  }

  ingredientName.value=''
  ingredientCost.value=''
  stockSelect.value=''
  usageQty.value=''

  loadIngredients()
}

// EDIT
window.editIngredient = (id,stockId,usage,name,cost)=>{
  editingIngredientId = id

  if(stockId){
    stockSelect.value = stockId
    ingredientName.value = ''
    ingredientCost.value = ''
  }else{
    ingredientName.value = name
    ingredientCost.value = cost
    stockSelect.value = ''
  }

  usageQty.value = usage
  ingredientBtn.textContent = "Update"
}

// DELETE
window.deleteIngredient = async (id)=>{
  const {error} = await supabase.from('ingredients').delete().eq('id',id)

  if(error){
    console.error(error)
    return
  }

  loadIngredients()
}

// LOAD INGREDIENTS
async function loadIngredients(){
  const {data,error} = await supabase
    .from('ingredients')
    .select('*, stocks(name, cost_per_unit, qty)')
    .eq('product_id', selectedProductId)

  if(error){
    console.error(error)
    return
  }

  ingredientList.innerHTML=''
  let total=0

  ;(data || []).forEach(i=>{

    let cost = 0
    let displayCost = 0

    if(i.stock_id){
      const totalCost = Number(i.stocks?.cost_per_unit || 0)
      const totalQty = Number(i.stocks?.qty || 0)

      const costPerPiece = totalQty > 0 ? totalCost / totalQty : 0

      cost = costPerPiece * Number(i.usage_per_product || 1)
      displayCost = costPerPiece
    }else{
      cost = Number(i.cost || 0)
      displayCost = cost
    }

    total += cost

    ingredientList.innerHTML += `
      <tr class="border-b hover:bg-gray-50">
        <td class="p-2">
          ${i.stock_id ? i.stocks?.name : i.name}
        </td>

        <td class="p-2">
          ₱${displayCost.toFixed(2)}
        </td>

        <td class="p-2">
          x${i.usage_per_product || 1}
        </td>

        <td class="p-2">
          ₱${cost.toFixed(2)}
        </td>

        <td class="p-2 space-x-2">
          <button onclick="editIngredient('${i.id}','${i.stock_id}','${i.usage_per_product}','${i.name}','${i.cost}')"
            class="bg-blue-500 text-white px-2 rounded">Edit</button>

          <button onclick="deleteIngredient('${i.id}')"
            class="bg-red-500 text-white px-2 rounded">Delete</button>
        </td>
      </tr>`
  })

  document.getElementById('totalCostView').textContent = total.toFixed(2)
  document.getElementById('profitView').textContent = (selectedProductPrice - total).toFixed(2)
}
// ================= SALES =================

async function loadProducts(){
  const {data}=await supabase.from('products').select('*')

  productSelect.innerHTML=`<option value="">Select</option>`

  ;(data || []).forEach(p=>{
    productSelect.innerHTML+=`<option value="${p.id}">${p.name}</option>`
  })
}

// ✅ FIXED + WITH STOCK + WITH EDIT SUPPORT
window.addOrUpdateSale = async ()=>{
  const productId = productSelect.value
  const qty = parseInt(saleQty.value)
  const saleType = document.getElementById('saleType')?.value || 'piece'

  if(!productId || !qty) return alert("Fill all fields")

  const {data:product}=await supabase
    .from('products')
    .select('*')
    .eq('id',productId)
    .single()

  const {data:ingredients}=await supabase
    .from('ingredients')
    .select('*')
    .eq('product_id',productId)

  let costPerUnit = 0

  for(let ing of (ingredients || [])){
    if(ing.stock_id){
      const {data:stock} = await supabase
        .from('stocks')
        .select('*')
        .eq('id',ing.stock_id)
        .single()

      const totalCostStock = Number(stock?.cost_per_unit || 0)
      const totalQtyStock = Number(stock?.qty || 1)

      const costPerPiece = totalCostStock / totalQtyStock

      costPerUnit += (Number(ing.usage_per_product || 1) * costPerPiece)
    }else{
      costPerUnit += Number(ing.cost || 0)
    }
  }

  const totalAmount = product.price * qty
  const totalCost = costPerUnit * qty
  const profit = totalAmount - totalCost

  if(editingSaleId){
    // ✅ UPDATE
    await supabase.from('sales')
      .update({
        product_id:productId,
        quantity:qty,
        total_amount:totalAmount,
        total_cost:totalCost,
        profit:profit
      })
      .eq('id',editingSaleId)

    editingSaleId = null

  }else{
    // ✅ INSERT
    await supabase.from('sales').insert([{
      product_id:productId,
      quantity:qty,
      total_amount:totalAmount,
      total_cost:totalCost,
      profit:profit
    }])
  }

  // ================= STOCK DEDUCTION =================
  let pieces = 1
  let boxName = null

  if(saleType === 'box2'){ pieces = 2; boxName = 'Box of 2' }
  if(saleType === 'box4'){ pieces = 4; boxName = 'Box of 4' }

  for(let ing of (ingredients || [])){
    if(!ing.stock_id) continue

    const usage = (Number(ing.usage_per_product || 1) * qty * pieces)

    const {data:stock} = await supabase
      .from('stocks')
      .select('*')
      .eq('id', ing.stock_id)
      .single()

    if(stock){
      await supabase.from('stocks')
        .update({ qty: stock.qty - usage })
        .eq('id', stock.id)
    }
  }

  if(boxName){
    const {data:box} = await supabase
      .from('stocks')
      .select('*')
      .ilike('name', `%${boxName}%`)
      .single()

    if(box){
      await supabase.from('stocks')
        .update({ qty: box.qty - qty })
        .eq('id', box.id)
    }
  }

  saleQty.value=''

  loadSales()
  loadDashboard()
  loadStock()
}

// ✅ RESTORED EDIT
window.editSale = (id,productId,qty)=>{
  editingSaleId = id
  productSelect.value = productId
  saleQty.value = qty
}

window.deleteStock = async (id)=>{
  // check if used
  const {data:used} = await supabase
    .from('ingredients')
    .select('id')
    .eq('stock_id', id)
    .limit(1)

  if(used && used.length > 0){
    return alert("Cannot delete: stock is used in ingredients")
  }

  const {error} = await supabase
    .from('stocks')
    .delete()
    .eq('id', id)

  if(error){
    console.error(error)
    return
  }

  loadStock()
}

// ================= SALES TABLE (FIXED UI) =================

async function loadSales(){
  const {data,error}=await supabase
    .from('sales')
    .select('*, products!sales_product_id_fkey(name)')
    .order('created_at',{ascending:false})

  if(error){
    console.error(error)
    return
  }

  salesList.innerHTML=''

  if(!data || data.length===0){
    salesList.innerHTML=`<tr>
      <td colspan="6" class="p-4 text-center">No sales yet</td>
    </tr>`
    return
  }

  data.forEach(s=>{
    salesList.innerHTML+=`
      <tr class="border-b hover:bg-gray-50">
        <td class="p-3">${s.products?.name || 'N/A'}</td>
        <td class="p-3">${s.quantity}</td>
        <td class="p-3 text-green-600">₱${s.total_amount}</td>
        <td class="p-3">₱${s.total_cost}</td>
        <td class="p-3 text-blue-600 font-bold">₱${s.profit}</td>
        <td class="p-3 space-x-2">
          <button onclick="editSale('${s.id}','${s.product_id}',${s.quantity})"
            class="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
        </td>
      </tr>`
  })
}

// ================= STOCK =================

// ADD / UPDATE
window.addStock = async ()=>{
  if(!stockName.value || !stockQty.value || !stockCost.value) return

  if(editingStockId){
    await supabase.from('stocks')
      .update({
        name:stockName.value,
        qty:stockQty.value,
        cost_per_unit:stockCost.value
      })
      .eq('id',editingStockId)

    editingStockId=null
  }else{
    await supabase.from('stocks').insert([{
      name:stockName.value,
      qty:stockQty.value,
      cost_per_unit:stockCost.value
    }])
  }

  stockName.value=''
  stockQty.value=''
  stockCost.value=''

  loadStock()
}

// EDIT
window.editStock = (id,name,qty,cost)=>{
  stockName.value=name
  stockQty.value=qty
  stockCost.value=cost
  editingStockId=id
}

// RESTOCK
window.addStockQty = async (id)=>{
  const amount = prompt("Add quantity:")
  if(!amount) return

  const {data}=await supabase.from('stocks').select('*').eq('id',id).single()

  await supabase.from('stocks')
    .update({ qty: data.qty + Number(amount) })
    .eq('id',id)

  loadStock()
}

// DEDUCT
window.deductStockQty = async (id)=>{
  const amount = prompt("Deduct quantity:")
  if(!amount) return

  const {data}=await supabase.from('stocks').select('*').eq('id',id).single()

  await supabase.from('stocks')
    .update({ qty: data.qty - Number(amount) })
    .eq('id',id)

  loadStock()
}

// DELETE
window.deleteStock = async (id)=>{
  if(!confirm("Delete stock?")) return
  await supabase.from('stocks').delete().eq('id',id)
  loadStock()
}

// LOAD
async function loadStock(){
  const {data}=await supabase.from('stocks').select('*')
  stockList.innerHTML=''

    ;(data||[]).forEach(s=>{
    stockList.innerHTML += `
      <tr class="border-b hover:bg-gray-50">
        <td class="p-3 font-medium">${s.name}</td>
        <td class="p-3">${s.qty}</td>
        <td class="p-3">₱${s.cost_per_unit}</td>
        <td class="p-3 space-x-2">
          <button onclick="editStock('${s.id}','${s.name}',${s.qty},${s.cost_per_unit})"
            class="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

          <button onclick="addStockQty('${s.id}')"
            class="bg-green-500 text-white px-2 py-1 rounded">+ Add</button>

          <button onclick="deductStockQty('${s.id}')"
            class="bg-yellow-500 text-white px-2 py-1 rounded">- Deduct</button>

          <button onclick="deleteStock('${s.id}')"
            class="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
        </td>
      </tr>`
  })
}

// ================= DASHBOARD =================

async function loadDashboard(){
  const {data}=await supabase.from('sales').select('*')

  totalSales.textContent = data.reduce((a,b)=>a+Number(b.total_amount),0)
  totalCost.textContent = data.reduce((a,b)=>a+Number(b.total_cost),0)
  totalProfit.textContent = data.reduce((a,b)=>a+Number(b.profit),0)

  renderChart(data)
}

// ================= CHART =================

function renderChart(data){
  const ctx=document.getElementById('salesChart')

  if(chart) chart.destroy()

  chart=new Chart(ctx,{
    type:'bar',
    data:{
      labels:data.map(s=>new Date(s.created_at).toLocaleDateString()),
      datasets:[{label:'Sales',data:data.map(s=>s.total_amount)}]
    }
  })
}

window.toggleSidebar = ()=>{
  const sidebar = document.getElementById('sidebar')
  sidebar.classList.toggle('-translate-x-full')
}

window.closeSidebar = ()=>{
  const sidebar = document.getElementById('sidebar')
  sidebar.classList.add('-translate-x-full')
}
