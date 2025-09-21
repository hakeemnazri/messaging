import cloudinary from 'cloudinary';

export async function uploads(file: string, public_id?: string, overwrite?: boolean, invalidate?: boolean) {
  return await cloudinary.v2.uploader.upload(file, {
    public_id,
    overwrite,
    invalidate
  });
}
