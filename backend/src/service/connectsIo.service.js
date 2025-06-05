
let ioStore = null

export const connectIO = (io) => {	
	if(io){
		ioStore = io;
	}
	
	return ioStore
}