//fetch
async function fetchAsync(){
  try {
    const response = await fetch('https://api.github.com');
    if(!response.ok){
      throw new Error('Error: ' + response.status);
    }
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log("Message error:" + error);
  }
}

fetchAsync();