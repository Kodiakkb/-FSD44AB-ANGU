import Queue from "./Queue";

import { numbers, listNumbers } from "./Data/data";

const queue = new Queue<number>();

for(const value of numbers) queue.push(value);

console.log(queue.pop()); // affiche la première valeur ajoutée dans la queue



const queueList = new Queue<number[]>();

for(const number of listNumbers) queueList.push(number);

console.log(queueList.pop()); // affiche la première valeur ajoutée dans la queue
