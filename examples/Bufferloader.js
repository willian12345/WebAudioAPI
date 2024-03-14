const fetchData = (context, url) => {
  return fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.arrayBuffer();
  })
  .then((buffer) => context.decodeAudioData(buffer))
  .then((decodedData) => {
    return decodedData;
  });
}
const BufferLoader = async (context, urls) => {
  console.log(urls)
  const result = [];
  
  for(let i = 0; i< urls.length; i++){
    const r = await fetchData(context, urls[i]);
    result.push(r);
  }
  return result;
}