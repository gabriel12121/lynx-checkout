import { Input } from "@/components/ui/input"
export default function Recebimento(){
	return (
		<div className=''>
			<div className='flex justify-between p-4'>
				<h2 className='text-3xl font-bold'>Recebedores</h2>
            <form className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                type="search"
                placeholder="Recebedor, documentos, ID..."
                className="pl-8 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white"
              />
            </form>			</div>
			<div className='p-4'>
				<div className='w-full m-auto border rounded-lg bg-white overflow-y-auto'>
					<div className='my-3 p-2 grid md:grid-cols-4'>
						<span className='sm:text-left text-right'>RECEBEDOR</span>
						<span className='hidden md:grid'>DOCUMENTO</span>
						<span>SALDO TOTAL</span>
					</div>
				</div>
			</div>
		</div>
		)
}
function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}