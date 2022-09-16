import { defineEventHandler } from 'h3';
import formidable from 'formidable';
import { v2 } from 'cloudinary';
import { u as useRuntimeConfig } from './nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';
import 'node:url';
import 'ipx';

const cloudinary = () => {
  const config = useRuntimeConfig();
  v2.config({
    cloud_name: config.cloudinaryCloudName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinaryApiSecret
  });
  return v2;
};
const uploadToCloudinary = (image) => {
  return new Promise((resolve, reject) => {
    cloudinary().uploader.upload(image, (error, data) => {
      if (error)
        reject(error);
      resolve(data);
    });
  });
};

const index_post = defineEventHandler(async (event) => {
  const form = formidable({});
  const response = await new Promise((resolve, reject) => {
    form.parse(event.req, (err, fields2, files2) => {
      if (err)
        reject(err);
      console.log(fields2, files2);
      resolve({ fields: fields2, files: files2 });
    });
  });
  const { fields, files } = response;
  const filePrimises = Object.keys(files).map(async (key) => {
    const file = files[key];
    const cloudinaryResource = await uploadToCloudinary(file.filepath);
    return cloudinaryResource.secure_url;
  });
  const secure_url = await Promise.all(filePrimises);
  return {
    url: secure_url[0]
  };
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
