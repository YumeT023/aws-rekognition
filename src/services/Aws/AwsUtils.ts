import { Emotion, FaceDetail, Landmark } from "aws-sdk/clients/rekognition";
import { beautifyText, normalizeText } from "../../utils";

class AwsUtils {
  static getAttribute(item: object) {
    return { ...item as Emotion | Landmark };
  }


  static beautifyString(type: string, key: keyof FaceDetail) {
    type = beautifyText(type);

    if (key === 'Emotions') {
      const normalized = normalizeText(type).replace(/\s+/g, '');
      type = normalizeText(normalized);
    }

    return type;
  }
}


export default AwsUtils;