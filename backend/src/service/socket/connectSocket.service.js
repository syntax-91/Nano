let ioStore = null

export const connectSocket = io => {
	if (io) {
		ioStore = io
	}

	return ioStore
}
