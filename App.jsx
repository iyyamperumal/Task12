import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar count={count} />
      <AllCards count={count} setCount={setCount} />
    </>

  );
}

export default App
function AllCards({ count, setCount }) {
  const data = [
    {
      type: "Fancy Product",
      rating: {
        value: " ",
        style: "unable",
      },
      price1: {
        value: "$40.00-$80.00",
        style: "able",
      },
      price2: {
        value: "",
        style: "unable",
      },
    },
    {
      type: "Special Item",
      rating: {
        value: "⭐⭐⭐⭐⭐",
        style: "able",
      },
      price1: {
        value: "$20.00",
        style: "disable",
      },
      price2: {
        value: "$18.00",
        style: "able",
      },
    },
    {
      type: "Sale Item",
      rating: {
        value: " ",
        style: "unable",
      },
      price1: {
        value: "$50.00",
        style: "disable",
      },
      price2: {
        value: "$25.00",
        style: "able",
      },
    },
    {
      type: "Popular Item",
      rating: {
        value: "⭐⭐⭐⭐⭐",
        style: "able",
      },
      price1: {
        value: "$40.00",
        style: "able",
      },
      price2: {
        value: "",
        style: "unable",
      },
    },
    {
      type: "Sale Item",
      rating: {
        value: " ",
        style: "unable",
      },
      price1: {
        value: "$50.00",
        style: "disable",
      },
      price2: {
        value: "$25.00",
        style: "able",
      },
    },
    {
      type: "Fancy Product",
      rating: {
        value: " ",
        style: "unable",
      },
      price1: {
        value: "$120.00-$280.00",
        style: "able",
      },
      price2: {
        value: "",
        style: "unable",
      },
    },
    {
      type: "Special Item",
      rating: {
        value: "⭐⭐⭐⭐⭐",
        style: "able",
      },
      price1: {
        value: "$20.00",
        style: "disable",
      },
      price2: {
        value: "$18.00",
        style: "able",
      },
    },
    {
      type: "Popular Item",
      rating: {
        value: "⭐⭐⭐⭐⭐",
        style: "able",
      },
      price1: {
        value: "$40.00",
        style: "able",
      },
      price2: {
        value: "",
        style: "unable",
      },
    },
  ]
  return (
    <div className='all-cards'>
      {data.map((val, idx) => (
        <CreateProductCard model={val} key={idx} setCount={setCount} count={count} />
      ))}
    </div>
  )
}
function NavBar({ count }) {
  return (
    <><h3>Start Bootstrap</h3>
      <div className='nav-bar'>

        <span>Home </span>
        <span>About </span>
        <span>Shop </span>
        <span className='counter'>
          Cart: {count}
        </span>
      </div>
    </>
  );
}
function CreateProductCard({ model, setCount, count }) {
  const [show, setShow] = useState(true)
  function handleAdd() {
    setShow(!show);
    setCount(count + 1);
  }
  function handleRemove() {
    setShow(!show);
    setCount(count - 1);
  }
  return (
    <div className='product-card'>
      <img className='product-image' src='https://images.unsplash.com/photo-1577538928305-3807c3993047?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FsZXxlbnwwfHwwfHx8MA%3D%3D' alt='#'></img>
      <div className='product-details'>
        <h3>{model.type}</h3>
        <p className={model.rating.style}>{model.rating.value}</p>
        <p><span className={model.price1.style}>{model.price1.value}</span> <span className={model.price2.style}>{model.price2.value}</span></p>
        {show ? (<button className='btn' onClick={handleAdd}>Add to cart</button>) :
          (<button className='btn' onClick={handleRemove}>Remove from cart</button>)}
      </div>
    </div>
  )
}