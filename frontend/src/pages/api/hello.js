const hello = (_req, res) => {
	res.status(200).json({ name: 'John Doe' })
}

export default hello
