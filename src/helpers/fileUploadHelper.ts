import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import * as fs from 'fs';
import { ICloudinaryResponse, IUploadFile } from '../interfaces/file';

cloudinary.config({
  cloud_name: 'de1j8v2bf',
  api_key: '963446763223552',
  api_secret: 'MHhQcGV0l5dva4tDEqMDYG10QQ8'
});

const uploadToCloudinary = async (file: IUploadFile): Promise<ICloudinaryResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, (error: Error, result: ICloudinaryResponse) => {
      fs.unlinkSync(file.path);
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage
});

export const FileUploadHelper = {
  uploadToCloudinary,
  upload
};
