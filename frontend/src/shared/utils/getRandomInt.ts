export function getRandomInt(
	min:number, max:number
)	{
	const Min = Math.ceil(min)
	const Max = Math.ceil(max)

	return Math.floor(Math.random() 
	* (Max - Min) + Min )

}