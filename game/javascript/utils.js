export function toImageDom(imageUrl) {
  const image = new window.Image();
  image.src = imageUrl;
  return image;
}
