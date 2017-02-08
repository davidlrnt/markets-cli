#!/usr/bin/env node

var action = process.argv[2];
var symbol = process.argv[3];

if (action && symbol) {
	switch (action) {
		case "stockprice":
			console.log("Stock price", symbol);
			break;
		default:
			console.log('Invalid Action');
			break;
	}
}