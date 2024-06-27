export default function Users() {
	return (
		<div className=''>
			<div className='flex justify-between p-4'>
				<h2 className='text-3xl font-bold'>Users</h2>
				<h2>Usuários</h2>
			</div>
			<div className='p-4'>
				<div className='w-full m-auto border rounded-lg bg-white overflow-y-auto'>
					<div className='my-3 p-2 grid md:grid-cols-4'>
						<span className='sm:text-left text-right'>NOME</span>
						<span className='hidden md:grid'>TELEFONE</span>
						<span>EQUIPE</span>
						<span>DATA DE CRIAÇÃO</span>
					</div>
				</div>
			</div>
		</div>
		)
}