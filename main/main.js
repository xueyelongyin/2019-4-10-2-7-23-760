module.exports = function main(inputs) {
    // write your code here...
	disp=distance(inputs['distance']);
	timp=inputs['parktime']*0.25;
	price=Math.round(disp+timp);
    return price;
};

function distance(dis){
	var price=0;
	if(0<dis<=2)){
		price=6;
	}else if(2<dis<8){
		price=6+(dis-2)*0.8;
	}else if(2<dis<8){
		price=8.8+(dis-8)*1;
	}
	
	return price;
}