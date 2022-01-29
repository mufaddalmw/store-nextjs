import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

const ProductDetails = ({product}) => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div key={product.id} className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
              <Image
                // loader={myLoader}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                src={product.image}
                alt={product.title}
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  {product.title}
                </h3>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">Category: {product.category}</p>
            <p className="text-sm font-medium text-gray-900">Description: {product.description}</p>
            <button
                type="submit"
                className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add to bag
              </button>
            <Link href="/products"><a className="mt-4 text-blue-900 underline inline-block">Go back to products</a></Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}


export async function getStaticPaths() {
  // get all the paths for your posts from an API
  // or file system
  const results = await fetch('https://fakestoreapi.com/products')
  const products = await results.json()
  const paths = products.map(product => (
    {
      params: {
        pid: product.id.toString()
      }
    })
  )
  /*
  [
    {params: {slug: 'get-started-with-node'}},
    {params: {slug: 'top-frameworks'}}
  ]
  */
  return {paths, fallback: true}
}

export async function getStaticProps({ params }) {
  console.log(params);
  const res = await fetch(`https://fakestoreapi.com/products/${params.pid}/`)
  const product = await res.json()
  return {
    props: {product}
  }
}

export default ProductDetails