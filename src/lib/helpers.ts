import scaleMaps from './scaleMaps.json';
const chromaticScale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
function getEnharmonicEquivalent(note: string): string {
	note = note[0].toUpperCase() + note.slice(1);
	const enharmonics = {
		'C#': 'Db',
		Db: 'C#',
		'D#': 'Eb',
		Eb: 'D#',
		'F#': 'Gb',
		Gb: 'F#',
		'G#': 'Ab',
		Ab: 'G#',
		'A#': 'Bb',
		Bb: 'A#'
	};
	return enharmonics[note] || note;
}

function buildScale(tonic: string, type: string): string[] | string {
	if (!scaleMaps[type]) {
		return 'not found';
	}
	tonic = tonic.toUpperCase();
	const chromaticScale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
	let indexOfTonic = chromaticScale.indexOf(tonic);
	let scaleIntervals = scaleMaps[type];
	let result = scaleIntervals.map((interval) => chromaticScale[(indexOfTonic + interval) % 12]);
	return result;
}

export { buildScale, getEnharmonicEquivalent, chromaticScale };
