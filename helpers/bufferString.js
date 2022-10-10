const bufferString = (image) => {
  if (Array.isArray(image)) {
    const images = image;
    const newImages = [];
    for (image of images) {
      const stringImage = Buffer.from(image?.data.data).toString();
      if (stringImage.includes("%")) {
        const stringArray = Array.from(stringImage);
        for (let elem of stringArray) {
          if (elem === "%") {
            stringArray.splice(stringArray.indexOf(elem), 3, '-');
          }
        }
        newImages.push(stringArray.join(""));
      } else {
        newImages.push(stringImage);
      }
    }
    return newImages;
  } else if (typeof image === "undefined") {
    return null;
  }
  return Buffer.from(image?.data.data).toString();
  // return typeof image.data.data
};

export default bufferString;
