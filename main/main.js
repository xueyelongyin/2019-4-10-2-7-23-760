module.exports = function main(inputs) {
    // write your code here...
	disp=distance(inputs['distance']);//distance price
	timp=inputs['parkTime']*0.25;//wait price
	price=Math.round(disp+timp//sum price
    return price;
};

function distance(dis){
	if(0<dis&&dis<=2){
		pri=6;
	}else if(2<dis&&dis<8){
		pri=6+(dis-2)*0.8;
	}else if(dis>=8){
		pri=10.8+(dis-8)*1.2;
	}
	return pri;
}