// import { useState } from "react";
// import './Product.css';

// export default function Products() {

//   const [product, setProduct] = useState([
//     { id: 0, name: 'Sugar', category:'Cereal', buyingprice: 190, sellingprice: 210, stock: 50 },
//     { id: 1, name: 'Rice', category:'Cereal', buyingprice: 200, sellingprice: 250, stock: 20 }
//   ]);

//   const [openDropdownId, setOpenDropdownId] = useState(null);

//   const [search, setSearch] = useState("");

//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("");
//   const [buyingprice, setBuyingprice] = useState("");
//   const [sellingprice, setSellingprice] = useState("");
//   const [stock, setStock] = useState("");

//   const toggleDropdownId = (id) => {
//     setOpenDropdownId(openDropdownId === id ? null : id);
//   };

//   const filteredProducts = product.filter(item =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleAdd = () => {
//     if (!name || !category || !buyingprice || !sellingprice || !stock) return;

//     const newItem = {
//       id: Date.now(),
//       name,
//       category,
//       buyingprice: Number(buyingprice),
//       sellingprice: Number(sellingprice),
//       stock: Number(stock)
//     };

//     setProduct([...product, newItem]);

//     setName("");
//     setCategory("");
//     setBuyingprice("");
//     setSellingprice("");
//     setStock("");
//   };

//   const handleDelete = (id) => {
//     const confirmDelete = window.confirm("Delete this product?");
//     if (!confirmDelete) return;

//     setProduct(product.filter(item => item.id !== id));
//     setOpenDropdownId(null);
//   };

//   const handleEdit = (id) => {
//     const newName = prompt("Enter new product name:");
//     const newCategory = prompt("Enter new category:");
//     const newBuyingprice = prompt("Enter new buyingprice:");
//     const newSellingprice = prompt("Enter new sellingprice:");
//     const newStock = prompt("Enter new stock quantity:");

//     if (newName !== null && newPrice !== null && newStock !== null) {
//       setProduct(product.map(item =>
//         item.id === id
//           ? {
//               ...item,
//               name: newName,
//               category: newCategory,
//               buyingprice: Number(newBuyingprice),
//               sellingprice: Number(newSellingprice),
//               stock: Number(newStock)
//             }
//           : item
//       ));
//     }

//     setOpenDropdownId(null);
//   };

//   return (
//     <>

//       <div>
//         <input
//         className="search"
//           type="text"
//           placeholder="Search product..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

      
//       <div className="form">
//         <input
//           type="text"
//           placeholder="Product name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//           <input
//           type="text"
//           placeholder="Category name"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         />

//       <input
//           type="number"
//           placeholder="Buying Price"
//           value={buying_price}
//           onChange={(e) => setBuyingprice(e.target.value)}
//         />

        
//         <input
//           type="number"
//           placeholder="Selling Price"
//           value={selling_price}
//           onChange={(e) => setSellingprice(e.target.value)}
//         />

//         <input
//           type="number"
//           placeholder="Stock"
//           value={stock}
//           onChange={(e) => setStock(e.target.value)}
//         />

//         <button className="add-btn" onClick={handleAdd}>
//           + Add Product
//         </button>
//       </div>

//       <div>
//         <table>
//           <thead>
//             <tr>
//               <th>Product</th>
//               <th>Category</th>
//               <th>Buying Price</th>
//               <th>Selling Price</th>
//               <th>Stock</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredProducts.length === 0 ? (
//               <tr>
//                 <td colSpan="4">No products found</td>
//               </tr>
//             ) : (
//               filteredProducts.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.name}</td>
//                   <td>{item.category}</td>
//                   <td>{item.buyingprice}</td>
//                   <td>{item.sellingprice}</td>
//                   <td>{item.stock}</td>
//                   <td className="action">
//                     <div className="dropdown">
//                       <button
//                         className="dropdown-toggle"
//                         onClick={() => toggleDropdownId(item.id)}
//                       >
//                         Actions
//                       </button>

//                       {openDropdownId === item.id && (
//                         <ul className="dropdown-menu">
//                           <li>
//                             <button onClick={() => handleEdit(item.id)}>
//                               Edit
//                             </button>
//                           </li>
//                           <li>
//                             <button onClick={() => handleDelete(item.id)}>
//                               Delete
//                             </button>
//                           </li>
//                         </ul>
//                       )}
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }
import { useState } from "react";
import "./Product.css";

export default function Products() {
  const [product, setProduct] = useState([
    {
      id: 0,
      name: "Sugar",
      category: "Cereal",
      buyingprice: 190,
      sellingprice: 210,
      stock: 50,
    },
    {
      id: 1,
      name: "Rice",
      category: "Cereal",
      buyingprice: 200,
      sellingprice: 250,
      stock: 20,
    },
  ]);

  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [buyingprice, setBuyingprice] = useState("");
  const [sellingprice, setSellingprice] = useState("");
  const [stock, setStock] = useState("");

  // Toggle action dropdown
  const toggleDropdownId = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  // Search filter
  const filteredProducts = product.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Add product
  const handleAdd = () => {
    if (!name || !category || !buyingprice || !sellingprice || !stock) {
      alert("Please fill all fields");
      return;
    }

    const newItem = {
      id: Date.now(),
      name,
      category,
      buyingprice: Number(buyingprice),
      sellingprice: Number(sellingprice),
      stock: Number(stock),
    };

    setProduct([...product, newItem]);

    // Clear form
    setName("");
    setCategory("");
    setBuyingprice("");
    setSellingprice("");
    setStock("");
  };

  // Delete product
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Delete this product?");
    if (!confirmDelete) return;

    setProduct(product.filter((item) => item.id !== id));
    setOpenDropdownId(null);
  };

  // Edit product
  const handleEdit = (id) => {
    const currentItem = product.find((item) => item.id === id);

    const newName = prompt("Enter new product name:", currentItem.name);
    const newCategory = prompt("Enter new category:", currentItem.category);
    const newBuyingprice = prompt(
      "Enter new buying price:",
      currentItem.buyingprice
    );
    const newSellingprice = prompt(
      "Enter new selling price:",
      currentItem.sellingprice
    );
    const newStock = prompt("Enter new stock quantity:", currentItem.stock);

    if (
      newName !== null &&
      newCategory !== null &&
      newBuyingprice !== null &&
      newSellingprice !== null &&
      newStock !== null
    ) {
      setProduct(
        product.map((item) =>
          item.id === id
            ? {
                ...item,
                name: newName,
                category: newCategory,
                buyingprice: Number(newBuyingprice),
                sellingprice: Number(newSellingprice),
                stock: Number(newStock),
              }
            : item
        )
      );
    }

    setOpenDropdownId(null);
  };

  return (
    <>
      {/* Search */}
      <div>
        <input
          className="search"
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Form */}
      <div className="form">
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category name"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="number"
          placeholder="Buying Price"
          value={buyingprice}
          onChange={(e) => setBuyingprice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Selling Price"
          value={sellingprice}
          onChange={(e) => setSellingprice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        <button className="add-btn" onClick={handleAdd}>
          + Add Product
        </button>
      </div>

      {/* Table */}
      <div>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Buying Price</th>
              <th>Selling Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan="6">No products found</td>
              </tr>
            ) : (
              filteredProducts.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td> {item.buyingprice}</td>
                  <td> {item.sellingprice}</td>
                  <td>{item.stock}</td>

                  <td className="action">
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        onClick={() => toggleDropdownId(item.id)}
                      >
                        Actions
                      </button>

                      {openDropdownId === item.id && (
                        <ul className="dropdown-menu">
                          <li>
                            <button onClick={() => handleEdit(item.id)}>
                              Edit
                            </button>
                          </li>
                          <li>
                            <button onClick={() => handleDelete(item.id)}>
                              Delete
                            </button>
                          </li>
                        </ul>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}