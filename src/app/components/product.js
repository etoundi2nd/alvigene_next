export default function Product({url, title, description, price}) {

  return (
    <a href="#" className="flex flex-row m-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover w-full h-64 md:h-auto md:w-100 md:rounded-t-lg" src={url} alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2md font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
          <strong>{price} FCFA</strong>
      </div>
    </a>

  )
}
