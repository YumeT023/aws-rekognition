import { DetectFacesRequest, ImageBlob } from "aws-sdk/clients/rekognition";
import { ProcessImageFn } from "../types";
import AwsRekognitionService from "./AwsRekognition";


export default class AwsProcessImage {
  private aws_rekognitionService = new AwsRekognitionService();
  
  public ProcessImage: ProcessImageFn = async (image, setData) => {
  
    const reader = new FileReader();
    
    reader.onload = (() => {
      return (e) => {
        const params: DetectFacesRequest = {
          Image: {
            Bytes: e.target?.result as ImageBlob
          },
          Attributes: ['ALL']
        }
  
        this.aws_rekognitionService.getFaceDetailByParams(params, setData);
        
      }
    })();  
    reader.readAsArrayBuffer(image as Blob);
  
  }

}