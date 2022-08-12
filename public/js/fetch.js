function fetch(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        return cb(data);
      }
      Error(`Error when loading the page${xhr.status} - ${xhr.statusText}`);
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}
