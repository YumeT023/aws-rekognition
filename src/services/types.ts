// import
import { DetectFacesRequest, Emotion, Emotions, FaceDetail, FaceDetailList, Landmarks } from "aws-sdk/clients/rekognition";

// getData function type
export type getDataFn = {
    (
        params: DetectFacesRequest,
        setFaceDetailList: (data: FaceDetailList) => void
    ): void;
}


// process image function type
export type ProcessImageFn = {
    (
        refUrl: Blob | MediaSource,
        setFaceDetailList: (data: FaceDetailList) => void
    ): void;
}