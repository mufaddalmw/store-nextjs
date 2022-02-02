import Image from 'next/image'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '@/features/productList/productSlice'


export default function ProductList({products}) {
  const cart = useSelector((state) => state.product.products)
  const dispatch = useDispatch()

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased - </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className='group'>
              <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <Image
                    // loader={myLoader}
                    priority
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
                      <Link href={`product/${product.id}`}><a><span aria-hidden="true" className="absolute inset-0" /> {product.title}</a></Link>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
              <button
                type="submit"
                className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => dispatch(increment(product.id))}
              >
                Add to bag
              </button>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}