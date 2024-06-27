import { ReactNode } from 'react';

export default function Page({ children }: { children: ReactNode }){
	return(
		<div className="bg-slate-50 flex-grow text-black p-2 mt-16">
			{children}
		</div>
		)
}