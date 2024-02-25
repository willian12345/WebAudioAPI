const fetchData = (url) => {
  const audioCtx = new AudioContext()
  return fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.arrayBuffer();
  })
  .then((buffer) => audioCtx.decodeAudioData(buffer))
  .then((decodedData) => {
    return decodedData;
    // const source = new AudioBufferSourceNode();
    // source.buffer = decodedData;
    // source.connect(audioCtx.destination);
    // return source;
  });
}
const BufferLoader = async (context, urls) => {
  console.log(urls)
  const result = [];
  
  for(let i = 0; i< urls.length; i++){
    const r = await fetchData(urls[i]);
    result.push(r);
  }
  return result;
}