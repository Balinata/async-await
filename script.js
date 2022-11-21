async function getData() {
    await delay(2000)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log('Data:', data)
}