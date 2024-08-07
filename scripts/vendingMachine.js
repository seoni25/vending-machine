/* 잔액이 남아있는지 계속 검사 --->기능 구현 미완
function(){
	if(change >= 1000) {
			selectButton = document.getElementById("select_button");
			selectButton.disabled = false;
	} else {
		selectButton = document.getElementById("select_button");
		selectButton.disabled = true;
	}
}
*/

function input() {
	/*input 함수
	put 버튼을 눌러 자판기에 돈을 넣으면,
	1. wallet의 돈이 그만큼 빠짐.
	2. 잔액에 그 만큼의 돈이 들어감.
	3. input 내용을 초기화
	4. 자판기 음료를 선택할 수 있음.*/
	let insertedMoney = document.getElementById("insertedMoney").value;
	insertedMoney = parseInt(insertedMoney);

	let change = document.getElementById("change").innerText;
	change = parseInt(change);
	change += insertedMoney;

	let walletMoney = document.getElementById("wallet_money").innerText;
	walletMoney = parseInt(walletMoney);
	walletMoney -= insertedMoney;

	document.getElementById("wallet_money").innerText = walletMoney;
	document.getElementById("change").innerText = change;
	document.getElementById("insertedMoney").value = "";
}

function buy(item) {
	/*buy 함수
	select_button을 누르면,
	1. 잔액에서 그만큼 돈이 차감됨.
	2. items란에 물품이 들어감.
	3. items란에 물품이 꽉 찬 상태라면, 돈도 차감되지 않고 물품도 들어가지 않음*/

	if(document.getElementById("content_items").childElementCount >= 15){
		alert("items란이 꽉 찼습니다");
	} else {
		/*1번*/
		let price = item.innerText;
		price = parseInt(price);

		let change = document.getElementById("change").innerText;
		change = parseInt(change);
		change -= price;

		document.getElementById("change").innerText = change;

		/*2번*/
		/*item 이미지 가져오기*/
		let itemNumber = item.getAttribute('id');
		let itemImgId = "item"+itemNumber;
		let itemImg = document.getElementById(itemImgId);
		let itemImgSrc = itemImg.src;
		
		/*item 이미지 붙이기*/
		let myItemsImg = document.createElement("img");
		myItemsImg.src = itemImgSrc;
		document.getElementById("content_items").appendChild(myItemsImg);
	}
}

function change() {
	/*change함수
	change 버튼을 누르면,
	1. 만약 잔액이 남아있다면 반환->지갑에 넣기&잔액을 0원으로 만들기
	2. 잔액이 없다면, 반환할 잔액이 없다고 알림.
	*/
	let change = document.getElementById("change").innerText;
	change = parseInt(change);

	/*잔액이 남아있는 경우*/
	if(change > 0){
		let walletMoney = document.getElementById("wallet_money").innerText;
		walletMoney = parseInt(walletMoney);
		walletMoney += change;

		document.getElementById("wallet_money").innerText = walletMoney;
		document.getElementById("change").innerText = 0;
	}
	/*잔액이 남아있지 않는 경우*/
	else {
		alert("반환할 잔액이 없습니다.");
	}
}

