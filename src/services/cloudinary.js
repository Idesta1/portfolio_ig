export const CLOUD_NAME = "dhtbqmkyd";

export function heroImage(publicId) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_600/${publicId}`;
}

export function cloudinaryImage(publicId) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/${publicId}`;
}

export function cloudinaryVideo(publicId) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${publicId}.mp4`;
}

export function cloudinaryVideoPoster(publicId) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${publicId}.jpg`;
}
