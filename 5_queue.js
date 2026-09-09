/* fake print queue to find out how a queue works */

class PrintManager {

    constructor() {
	this.queue = [];
    }

    queuePrintJob(document) {
	this.queue.push(document);
    }

    run() {
	while (this.queue.length) {
	    let doc = this.queue.shift();
	    console.log(`printing doument "${doc}"`);
	}
    }
}

let pm = new PrintManager();
pm.queuePrintJob("First Document");
pm.queuePrintJob("Second Document");
pm.queuePrintJob("Third Document");
pm.run();
