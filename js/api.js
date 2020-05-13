function addOrder(suffix) {
	var xhr = new XMLHttpRequest();
	var url = "/";
	var name = document.getElementById("userName");
	var phone = document.getElementById("userPhone");
	var email = document.getElementById("userEmail");
	var userCountry = document.getElementById("userCountry");
	var userCity = document.getElementById("userCity");
	var userStreet = document.getElementById("userStreet");
	var userBuilding = document.getElementById("userBuilding");
	var userPostal	 = document.getElementById("userPostal");
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var json = JSON.parse(xhr.responseText);
			if(json == 'ERROR' ) {
				alert(json)
			}
			else {
				window.location = json;
			}
		}
	};
	var delivery = document.getElementById("userCity");
	var lead_request = {};
	var items=[];
	var els = document.getElementsByClassName("items_quantity");
	Array.from(els).forEach((el) => {
		items.push({name:el.id, quantity:el.value});
	});
	lead_request['type']="add_order";
	lead_request['order']={};
	lead_request['order']['name']=name.value;
	lead_request['order']['phone']=phone.value;
	lead_request['order']['email']=email.value;
	lead_request['order']['orderType']=suffix;
	lead_request['order']['delivery_text']=delivery.value;
	lead_request['order']['userCountry']=userCountry.value;
	lead_request['order']['userCity']=userCity.value;
	lead_request['order']['userStreet']=userStreet.value;
	lead_request['order']['userBuilding']=userBuilding.value;
	lead_request['order']['userPostal']=userPostal.value;
	lead_request['order']['items']=items;

	if (suffix == "FormNTZ") {
		lead_request['order']['ntzLogin']=document.getElementById("userLogin").value;
	}

	// console.log(lead_request);
	var data = JSON.stringify(lead_request);
	// console.log(data);
	xhr.send(data);
}

function count_delivery() {
	var xhr = new XMLHttpRequest();
	var url = "/countdelivery";
	var lead_request = {};

	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var json = parseFloat(JSON.parse(xhr.responseText));
			console.log(json);
			$('#totalDelivery').text(json);
			count_total();
		}
	};
	var items=[];
	var els = document.getElementsByClassName("items_quantity");
	Array.from(els).forEach((el) => {
		items.push({name:el.id, quantity:el.value});
	});
	lead_request['order']={};
	lead_request['order']['items']=items;
	lead_request['country_code'] = document.getElementById("userCountry").value;
	console.log(lead_request['country_code']);
	var data = JSON.stringify(lead_request);
	xhr.send(data);
}