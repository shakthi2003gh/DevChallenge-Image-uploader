// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STROAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

const imageExtentions = [
  "ase",
  "art",
  "bmp",
  "blp",
  "cd5",
  "cit",
  "cpt",
  "cr2",
  "cut",
  "dds",
  "dib",
  "djvu",
  "egt",
  "exif",
  "gif",
  "gpl",
  "grf",
  "icns",
  "ico",
  "iff",
  "jng",
  "jpeg",
  "jpg",
  "jfif",
  "jp2",
  "jps",
  "lbm",
  "max",
  "miff",
  "mng",
  "msp",
  "nef",
  "nitf",
  "ota",
  "pbm",
  "pc1",
  "pc2",
  "pc3",
  "pcf",
  "pcx",
  "pdn",
  "pgm",
  "PI1",
  "PI2",
  "PI3",
  "pict",
  "pct",
  "pnm",
  "pns",
  "ppm",
  "psb",
  "psd",
  "pdd",
  "psp",
  "px",
  "pxm",
  "pxr",
  "qfx",
  "raw",
  "rle",
  "sct",
  "sgi",
  "rgb",
  "int",
  "bw",
  "tga",
  "tiff",
  "tif",
  "vtf",
  "xbm",
  "xcf",
  "xpm",
  "3dv",
  "amf",
  "ai",
  "awg",
  "cgm",
  "cdr",
  "cmx",
  "dxf",
  "e2d",
  "egt",
  "eps",
  "fs",
  "gbr",
  "odg",
  "svg",
  "stl",
  "vrml",
  "x3d",
  "sxd",
  "v2d",
  "vnd",
  "wmf",
  "emf",
  "art",
  "xar",
  "png",
  "webp",
  "jxr",
  "hdp",
  "wdp",
  "cur",
  "ecw",
  "iff",
  "lbm",
  "liff",
  "nrrd",
  "pam",
  "pcx",
  "pgf",
  "sgi",
  "rgb",
  "rgba",
  "bw",
  "int",
  "inta",
  "sid",
  "ras",
  "sun",
  "tga",
  "heic",
  "heif",
];

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export async function uploadBlob(blob) {
  const now = Date.now();
  const fileName = now + "/" + blob.name;
  const fileExtention = blob.name.split(".").pop();

<<<<<<< HEAD
  if (!imageExtentions.includes(fileExtention))
    throw new { message: "invalid file", status: 404 }();
=======
  if (!imageExtentions.includes(fileExtention)) throw "invalid file";
>>>>>>> refs/remotes/origin/master

  const storageRef = ref(storage, fileName);

  await uploadBytes(storageRef, blob);
  return fileName;
}

export async function getImageUrl(fileName) {
  const imageRef = ref(storage, fileName);
  return await getDownloadURL(imageRef).then((url) => url);
}
