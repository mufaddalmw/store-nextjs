import Head from 'next/head'

function Cart({ data }) {
  console.log(data);
  // Render data...
  return (
    <>
      hello cart
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://fakestoreapi.com/products/1`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Cart