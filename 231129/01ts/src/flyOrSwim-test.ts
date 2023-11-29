import { Bird, Fish } from './BirdAndFish';
import { flyOrSwim } from './flyOrSwim';

const birdT = new Bird();
const fishT = new Fish();

[birdT, fishT].forEach(flyOrSwim);
