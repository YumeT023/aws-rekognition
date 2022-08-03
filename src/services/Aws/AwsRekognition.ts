import AWS from 'aws-sdk';
import { getDataFn } from '../types';
import Init from './AwsInit';

class AwsRekognitionService {
  private aws_ServiceObject?: AWS.Rekognition;

  constructor() {
    Init();
    this.aws_ServiceObject = new AWS.Rekognition();
  }

  public getFaceDetailByParams: getDataFn = (params, setFaceDetailList) => {
    this.aws_ServiceObject?.detectFaces(params, (err, data) => {
  
      if (err) console.log(err, err.stack);

      console.log(data.FaceDetails![0]);
      setFaceDetailList(data.FaceDetails!);
    });

    return null;
  }
  
}

export default AwsRekognitionService;