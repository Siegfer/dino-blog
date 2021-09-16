import 'bootstrap/dist/css/bootstrap.min.css'
import Dino from './Dino'
import Reptile from './Reptile'
import './App.css'

const App = () => {
	let dino = {
		title: 'Dinosaurs are aight',
		author: 'Mcdonald Dinonuggets',
		body: 'Something about Bodysaurus',
		comments: [
			{
				username: 'Siegfer',
				comment: 'Decent!'
			},
			{
				username: 'Siegfer',
				comment: 'I have seen worse tbh'
			},
			{
				username: 'Siegfer',
				comment: 'Cheesegasaurus FTW!!'
			}
		]
	}

	let reptile = {
		land: 'Snakegasaurus',
		comments: [
			{
				username: 'Siegfer',
				comment: 'Crocodilasaurus!'
			},
			{
				username: 'Siegfer',
				comment: 'Sharkasaurus'
			},
			{
				username: 'Siegfer',
				comment: 'Lobstersaurus'
			}
		]
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
