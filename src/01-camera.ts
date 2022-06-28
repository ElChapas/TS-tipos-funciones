import { Camera, CameraDirection, CameraResultType } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri, //Aqui encontramos un enum
    // export declare enum CameraResultType {
    // Uri = "uri",
    // Base64 = "base64",
    // DataUrl = "dataUrl"
    direction: CameraDirection.Front
  });
};




