import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const RankData = () => {

	// const printData = () => {
	// 	axios.get('https://api.nexon.co.kr/kart/v1.0/matches/0043000d4107a59d')
	// 	.then((results) => console.log(results));
	// }

	// useEffect(() => {
	// 	printData();
	// }, [])

	const [playerMap, setPlayerMap] = useState([]);

	//playerData 한번에 넘겨줘야함
	const setting = (playerData) => {
		let arr = [];
		playerData.map((item) => {
			let characterName = item.characterName;
			let score;
			let count = 0;

			if(item.matchRank === '1'){
				score=10;
			} else if(item.matchRank === '2'){
				score = 7;
			} else if(item.matchRank === '3'){
				score = 5;
			} else if(item.matchRank === '4'){
				score = 4;
			} else if(item.matchRank === '5'){
				score = 3;
			} else if(item.matchRank === '6'){
				score = 1;
			} else if(item.matchRank === '7'){
				score = 0;
			} else if(item.matchRank === '8'){
				score = -1;
			} else {
				score = -5;
			}
			
			//플레이어가 존재하면 score를 원래잇던 플레이어에게 덮어씌운다.
			if(arr.find((findItem) => findItem.characterName === characterName)) {
				const indexValue = arr.findIndex((findIndexItem) => findIndexItem.characterName === characterName);
				arr[indexValue].score += score;
				arr[indexValue].count++;
				arr[indexValue].rankSum += parseInt(item.matchRank === '99' || item.matchRank === '0' ? '8' : item.matchRank)
			} else {
				arr.push({
					characterName,
					score,
					count: count+1,
					rankSum: parseInt(item.matchRank === '99' || item.matchRank === '0' ? '8' : item.matchRank)
				})
			}
		
		})
		setPlayerMap(arr)
	}

	useEffect(() => {
		setting(fakePlayers);
	}, [])

	// console.log(playerMap.map((item) => console.log(item.rankSum / item.count)))
	console.log(playerMap)

	return (
		<div>

		</div>
	)
}

const fakePlayers = [
	{
		"accountNo": "906065504",
		"characterName": "오직끝을향해",
		"character": "2ecb10f5e23493727a80a91421d6242a18b131f743676e72317bde4bd5d27131",
		"kart": "bd3267fcee4c0e4b418abd80c9aff923a7eea6241ae65df625fe34788958621b",
		"license": "",
		"pet": "e98d90cc5356f37b31faa57471fac57854a950fd8fafa51082d7fb3338f2526e",
		"flyingPet": "",
		"partsEngine": "",
		"partsHandle": "",
		"partsWheel": "",
		"partsKit": "",
		"rankinggrade2": "0",
		"matchRank": "99",
		"matchRetired": "0",
		"matchWin": "0",
		"matchTime": "81588"
},
{
		"accountNo": "151377610",
		"characterName": "bggbbg",
		"character": "b6eb565e2940edbf43e4fcc42993dcdf12817f35714627ab4790853b6b2eaded",
		"kart": "bd3267fcee4c0e4b418abd80c9aff923a7eea6241ae65df625fe34788958621b",
		"license": "",
		"pet": "",
		"flyingPet": "",
		"partsEngine": "",
		"partsHandle": "",
		"partsWheel": "",
		"partsKit": "",
		"rankinggrade2": "0",
		"matchRank": "4",
		"matchRetired": "0",
		"matchWin": "0",
		"matchTime": "89227"
},
{
		"accountNo": "537732149",
		"characterName": "알리바바82",
		"character": "b6eb565e2940edbf43e4fcc42993dcdf12817f35714627ab4790853b6b2eaded",
		"kart": "bd3267fcee4c0e4b418abd80c9aff923a7eea6241ae65df625fe34788958621b",
		"license": "",
		"pet": "",
		"flyingPet": "",
		"partsEngine": "",
		"partsHandle": "",
		"partsWheel": "",
		"partsKit": "",
		"rankinggrade2": "0",
		"matchRank": "3",
		"matchRetired": "0",
		"matchWin": "0",
		"matchTime": "86864"
},
{
		"accountNo": "134229870",
		"characterName": "젖탱이3세",
		"character": "b6eb565e2940edbf43e4fcc42993dcdf12817f35714627ab4790853b6b2eaded",
		"kart": "bd3267fcee4c0e4b418abd80c9aff923a7eea6241ae65df625fe34788958621b",
		"license": "",
		"pet": "e98d90cc5356f37b31faa57471fac57854a950fd8fafa51082d7fb3338f2526e",
		"flyingPet": "",
		"partsEngine": "",
		"partsHandle": "",
		"partsWheel": "",
		"partsKit": "",
		"rankinggrade2": "0",
		"matchRank": "1",
		"matchRetired": "0",
		"matchWin": "1",
		"matchTime": "80789"
},{
	"accountNo": "906065504",
	"characterName": "오직끝을향해",
	"character": "2ecb10f5e23493727a80a91421d6242a18b131f743676e72317bde4bd5d27131",
	"kart": "bd3267fcee4c0e4b418abd80c9aff923a7eea6241ae65df625fe34788958621b",
	"license": "",
	"pet": "e98d90cc5356f37b31faa57471fac57854a950fd8fafa51082d7fb3338f2526e",
	"flyingPet": "",
	"partsEngine": "",
	"partsHandle": "",
	"partsWheel": "",
	"partsKit": "",
	"rankinggrade2": "0",
	"matchRank": "2",
	"matchRetired": "0",
	"matchWin": "0",
	"matchTime": "81588"
},
{
	"accountNo": "151377610",
	"characterName": "bggbbg",
	"character": "b6eb565e2940edbf43e4fcc42993dcdf12817f35714627ab4790853b6b2eaded",
	"kart": "bd3267fcee4c0e4b418abd80c9aff923a7eea6241ae65df625fe34788958621b",
	"license": "",
	"pet": "",
	"flyingPet": "",
	"partsEngine": "",
	"partsHandle": "",
	"partsWheel": "",
	"partsKit": "",
	"rankinggrade2": "0",
	"matchRank": "4",
	"matchRetired": "0",
	"matchWin": "0",
	"matchTime": "89227"
},
{
	"accountNo": "537732149",
	"characterName": "알리바바82",
	"character": "b6eb565e2940edbf43e4fcc42993dcdf12817f35714627ab4790853b6b2eaded",
	"kart": "bd3267fcee4c0e4b418abd80c9aff923a7eea6241ae65df625fe34788958621b",
	"license": "",
	"pet": "",
	"flyingPet": "",
	"partsEngine": "",
	"partsHandle": "",
	"partsWheel": "",
	"partsKit": "",
	"rankinggrade2": "0",
	"matchRank": "3",
	"matchRetired": "0",
	"matchWin": "0",
	"matchTime": "86864"
},
{
	"accountNo": "134229870",
	"characterName": "젖탱이3세",
	"character": "b6eb565e2940edbf43e4fcc42993dcdf12817f35714627ab4790853b6b2eaded",
	"kart": "bd3267fcee4c0e4b418abd80c9aff923a7eea6241ae65df625fe34788958621b",
	"license": "",
	"pet": "e98d90cc5356f37b31faa57471fac57854a950fd8fafa51082d7fb3338f2526e",
	"flyingPet": "",
	"partsEngine": "",
	"partsHandle": "",
	"partsWheel": "",
	"partsKit": "",
	"rankinggrade2": "0",
	"matchRank": "1",
	"matchRetired": "0",
	"matchWin": "1",
	"matchTime": "80789"
},{
	"accountNo": "889334352",
	"characterName": "의올",
	"character": "68739fffd5995d2cefb55e8b65ccc91c4b5edf5ffd775677d795d24d0531f002",
	"kart": "af2552c4038a66fc6903b6414700576826bdc7c2bcd246b8bcc38644ed7f2df8",
	"license": "",
	"pet": "",
	"flyingPet": "a87cb96d91a4e0c357c4eaeb7dbc05ef515d183e79a8aa0e674c36f917400a4b",
	"partsEngine": "",
	"partsHandle": "",
	"partsWheel": "",
	"partsKit": "",
	"rankinggrade2": "3",
	"matchRank": "2",
	"matchRetired": "0",
	"matchWin": "0",
	"matchTime": "118802"
},
{
	"accountNo": "906829524",
	"characterName": "쨈민이2세",
	"character": "0a5e1bd082612d4dd95d887c629c2e6daf42d0e282e738d9c21d522da76b72f8",
	"kart": "bd3267fcee4c0e4b418abd80c9aff923a7eea6241ae65df625fe34788958621b",
	"license": "",
	"pet": "",
	"flyingPet": "16c0894cf7de4a419b2a4fb40568922546ac1436db1bda0e0879bdc35be8f796",
	"partsEngine": "",
	"partsHandle": "",
	"partsWheel": "",
	"partsKit": "",
	"rankinggrade2": "3",
	"matchRank": "1",
	"matchRetired": "0",
	"matchWin": "1",
	"matchTime": "118743"
},
{
	"accountNo": "554398765",
	"characterName": "Revier뀨잉",
	"character": "81c9f10de2f39d42f97b206c5804c32495e3f3e751d20529e1ac3c8aeb0a4939",
	"kart": "eb333073a3486846660dc9e82e6b0c55c508c31853e4f4151d36f4b7fe17fe33",
	"license": "",
	"pet": "",
	"flyingPet": "9253edc8bcbfa28a5427852ff2b746ca8ed214374118f5b815fafc098928fa66",
	"partsEngine": "",
	"partsHandle": "",
	"partsWheel": "",
	"partsKit": "",
	"rankinggrade2": "3",
	"matchRank": "2",
	"matchRetired": "0",
	"matchWin": "0",
	"matchTime": "103109"
},
{
	"accountNo": "168481622",
	"characterName": "잘해다오7",
	"character": "1696ecb5ae0fbfc589d1c9dee060d261041b96fe9e58ae52c3794b0aea212348",
	"kart": "d47aa62de79d88ecee263e07456555d99ff8957f1760d0f248667913acbc2b67",
	"license": "",
	"pet": "f28ff31b31a0129c01614140e705ce9b276948a69a004fb75d09ca5fea81393c",
	"flyingPet": "a87cb96d91a4e0c357c4eaeb7dbc05ef515d183e79a8aa0e674c36f917400a4b",
	"partsEngine": "0",
	"partsHandle": "0",
	"partsWheel": "0",
	"partsKit": "2",
	"rankinggrade2": "3",
	"matchRank": "1",
	"matchRetired": "0",
	"matchWin": "1",
	"matchTime": "94843"
},
{
	"accountNo": "251998212",
	"characterName": "이음메메메",
	"character": "c0383465b2ff8b2c2971ba377e35d170fab4ba27bbdef6a4ef27fa71d573c269",
	"kart": "66e6e85ff4ae329f96067f6da4827a4e679ccb0b9a8fafebb9549f08fe182355",
	"license": "",
	"pet": "bfc06ff658a4364bbe69cdc27f6bfa8b40348d9546b6d2489546381d51d3cc37",
	"flyingPet": "133f42f75b2b64f7d73f4a6a5a92561a5d9a917c964eebd430183b5f7c436dbd",
	"partsEngine": "2",
	"partsHandle": "2",
	"partsWheel": "2",
	"partsKit": "0",
	"rankinggrade2": "3",
	"matchRank": "1",
	"matchRetired": "0",
	"matchWin": "1",
	"matchTime": "95578"
},
{
	"accountNo": "1527592417",
	"characterName": "카오딩스털",
	"character": "b6eb565e2940edbf43e4fcc42993dcdf12817f35714627ab4790853b6b2eaded",
	"kart": "f8d47eb17853dd6fab2033431ef0b0bbdba9d575eed8f972209814b9b49f8ed9",
	"license": "",
	"pet": "",
	"flyingPet": "",
	"partsEngine": "0",
	"partsHandle": "0",
	"partsWheel": "0",
	"partsKit": "0",
	"rankinggrade2": "0",
	"matchRank": "2",
	"matchRetired": "0",
	"matchWin": "0",
	"matchTime": "104442"
},{
	"accountNo": "84186619",
	"characterName": "guswlsrla",
	"character": "e2535498883ced3219a6109d164bd8ef6e4a2c738d0a2ccf878b898a00555174",
	"kart": "111cc5dd63afe8847ee3f3a07afa18ecfa065db2f2eadbe4798ca4eacac9165c",
	"license": "",
	"pet": "7a7a2bb63e9ea660b9bc688fad2b2b41e8b3bf4e85dbcf9eced6dff61fe9c584",
	"flyingPet": "0c675f07066d2970977087f0e4798d35a8a523ba83f113830440d037fd0899df",
	"partsEngine": "0",
	"partsHandle": "0",
	"partsWheel": "0",
	"partsKit": "0",
	"rankinggrade2": "0",
	"matchRank": "8",
	"matchRetired": "0",
	"matchWin": "0",
	"matchTime": "101993"
},
{
	"accountNo": "1611473921",
	"characterName": "물떡중독자",
	"character": "b6eb565e2940edbf43e4fcc42993dcdf12817f35714627ab4790853b6b2eaded",
	"kart": "",
	"license": "",
	"pet": "",
	"flyingPet": "",
	"partsEngine": "",
	"partsHandle": "",
	"partsWheel": "",
	"partsKit": "",
	"rankinggrade2": "0",
	"matchRank": "1",
	"matchRetired": "0",
	"matchWin": "1",
	"matchTime": "92688"
}
]

const fakeMatchID =  [
	"0043000d4107a59d",
	"033600084107a3a9",
	"0077000d410727f1",
	"01ed000b41067829",
	"030a000d410685a6",
	"018e000b410640cd",
	"01b100084106d184",
	"0275000b4106266f",
	"00b2000d410660d8",
	"0267000b41061a1b",
	"0043000d4105b8e0",
	"0126000b41053b25",
	"0236000b41051d4c",
	"01d400084105b798",
	"03fe0008410580e8",
	"0077000d41048e89",
	"01ed000b41044981",
	"001d000841049a80",
	"018e000b4103edb5",
	"0267000b4103d8a7",
	"02b6000841045048",
	"0275000b410399aa",
	"0170000841042947",
	"039400084103c790",
	"030a000d4102ec05",
	"0205000841030828",
	"0077000d41026159",
	"011200084102c1d8",
	"01ee000d4101fe1a",
	"018e000b41014b26",
	"027900084101d787",
	"024e000b4100f8d0",
	"0267000b4100bb88",
	"0275000b41006191",
	"02cd000b40ffbd33",
	"0077000d40ffc63b",
	"02da000841001313",
	"018e000b40ff00e8",
	"0375000840ff7627",
	"01ee000d40fee8ad",
	"0267000b40fe8d2f",
	"026d000840ff08c7",
	"00b2000b40fdff27",
	"02cd000b40fd9f54",
	"00c0000840fdefd5",
	"018e000b40fd3511",
	"0077000d40fd34f2",
	"018a000b40fc5b6a",
	"01ee000d40fc7422",
	"00b2000b40fc0f6d",
	"0185000b40fbd5cf",
	"03a9000840fc64a2",
	"02cd000b40fb475a",
	"01ac000d40fb7ffe",
	"01d7000840fb95a9",
	"0353000b40fabee1",
	"0187000840fb18a9",
	"0077000d40fa6d46",
	"00ea000d40fa54dc",
	"018a000b40f9eae7",
	"0113000840fa7881",
	"01ee000d40f99e4e",
	"00b2000b40f94fb1",
	"02cd000b40f92efa",
	"0185000b40f8e128",
	"0250000d40f8c6ca",
	"01ac000d40f8c052",
	"03f5000840f8f1e1",
	"0348000d40f85fc3",
	"014b000840f8a3c1",
	"018a000b40f77767",
	"00ea000d40f764aa",
	"0077000d40f75160",
	"01ee000d40f7236b",
	"02cd000b40f6bf80",
	"0185000b40f6849a",
	"01a2000840f6bf90",
	"01ac000d40f5f412",
	"00b2000b40f59623",
	"0171000840f62b20",
	"0250000d40f56abe",
	"018a000b40f51a7b",
	"00ea000d40f4aa7b",
	"0185000b40f44ede",
	"0077000d40f43859",
	"02cd000b40f385e1",
	"0348000d40f37372",
	"02d0000b40f3265c",
	"018a000b40f2b9f6",
	"0255000d40f279ff",
	"0250000d40f25aaf",
	"01ee000d40f24795",
	"02ad000840f2ac98",
	"0185000b40f1df46",
	"0077000d40f20953",
	"03cf000d40f18493",
	"0348000d40f12220",
	"038b000840f11280",
	"018a000b40f0353f",
	"01a7000b40f0073a",
	"0053000840f06354",
	"0077000d40ef8c8c",
	"0241000840efb2f0",
	"0185000b40ef02e9",
	"03cf000d40eeb43d",
	"018a000b40edee4d",
	"0348000d40edbd3a",
	"0144000840ed5170",
	"018a000b40ec37f2",
	"0304000840ecad60",
	"0077000d40ec20b1",
	"02d5000840ec3060",
	"0185000b40eb8b76",
	"0042000840eaffb0",
	"0141000840ea7ec8",
	"018a000b40e97383",
	"03a7000840e9f620",
	"0092000b40e86687",
	"0348000840e907f7",
	"0077000d40e86474",
	"0398000840e8a64f",
	"0210000b40e775af",
	"018a000b40e6e98c",
	"02bf000840e78203",
	"00eb000840e6e517",
	"0092000b40e59f78",
	"021e000d40e53b01",
	"018a000b40e4dea9",
	"0081000840e5431f",
	"0210000b40e46051",
	"03b1000840e4f4e0",
	"021e000d40e39f53",
	"0092000b40e35f1d",
	"0077000d40e35bf1",
	"038e000840e2ce28",
	"0313000840e29f48",
	"018a000b40e1cb5e",
	"021e000d40e1f4cf",
	"016b000840e22a18",
	"0346000840e1ff5e",
	"0092000b40e0c8b3",
	"01aa000b40e065e2",
	"0077000d40e08486",
	"021e000d40e04ac9",
	"0210000b40dfa35d",
	"02fc000840e02e48",
	"018a000b40df22b4",
	"0247000840dfa590",
	"0075000840df385f",
	"021e000d40deab51",
	"0092000b40de031b",
	"01aa000b40ddee0c",
	"0077000d40dded60",
	"018a000b40dcee01",
	"021e000d40dd05df",
	"0210000b40dc1ff3",
	"01ac000840dc9c38",
	"01aa000b40db947c",
	"02bf000840dc3705",
	"021e000d40db6d4d",
	"0077000d40dad2f1",
	"018a000b40da8a5f",
	"01aa000b40d9c25c",
	"010a000840da46ce",
	"021e000d40d9d018",
	"0090000840d93927",
	"012c000840d8f6bf",
	"021e000d40d8367c",
	"0077000d40d8117f",
	"01aa000b40d79412",
	"018a000b40d7220f",
	"03a4000840d72dc7",
	"0298000d40d6abf4",
	"021e000d40d69abe",
	"0062000840d623e8",
	"01aa000b40d57009",
	"018a000b40d50bb2",
	"0077000d40d52b9e",
	"021e000d40d4e7fd",
	"0298000d40d4ad84",
	"01e7000840d4fb08",
	"01aa000b40d39dd9",
	"021e000d40d34b54",
	"0232000d40d30504",
	"0171000b40d280d1",
	"0361000d40d2a8bb",
	"0077000d40d29582",
	"0288000840d2ff48",
	"018a000b40d1d2ce",
	"01aa000b40d1cdec",
	"021e000d40d1afe4",
	"0120000d40d17387",
	"00cb000b40d11951",
	"0267000840d19bb0",
	"01b1000840d09dc8",
	"0361000d40d0158d",
	"021e000d40d012ce",
	"0171000b40cfd057",
	"0077000d40cfefa6",
	"01aa000b40cf571f"
];
