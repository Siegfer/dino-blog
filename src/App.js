import Dino from './Dino'
import Reptile from './Reptile'
import './App.css'

const App = () => {
	let dino = {
		title: 'Dinosaurs are aight',
		author: 'Mcdonald Dinonuggets',
		body: 'Something about Bodysaurus',
		comments: ['Decent', 'I have seen worse tbh', 'Cheesegasaurus FTW!!']
	}
	let reptile = {
		land: 'Snakegasaurus',
		comments: ['Crocodilesaurus', 'Sharksaurus', 'Lobstersaurus']
	}

	return (
		<div>
			<Dino
				title={dino.title}
				author={dino.author}
				body={dino.body}
				comments={dino.comments}
			/>
			<Reptile land={reptile.land} comments={reptile.comments} />
		</div>
	)
}

export default App
