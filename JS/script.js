//задание 1
let cityList = document.querySelector('ul')
console.log(cityList)

//задание 2
let users = '["user1","user2","user3","user4","user5"]';
users = JSON.parse(users)
users.push("user6")
console.log(users)

//задание 3
let user = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
,
	{
		"name": "user4",
		"age": 28,
		"salary": 4000
	}
]`;

user = JSON.parse(user)
user.push({
    "name": "user5",
    "age": 29,
    "salary": 5000
})

//задание 4

let json = '["user1","user2","user3","user4","user5"]';
let arr = JSON.parse(json)
console.log(json)
