  // Loads all images in src/assets
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  };
  
  const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

  export {images};