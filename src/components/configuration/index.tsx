// import
import React, { FC, useState } from "react";
import { Placeholder } from "./../../components";
import { ConfigurationI } from "../types";
import AwsProcessImage from "../../services/Aws/AwsProcessImage";
import { FaceDetailList } from "aws-sdk/clients/rekognition";
import './index.css';
import './../index.css';

const Configuration: FC<ConfigurationI> = (
    {
        Sidebar,
        Visualize,
        option,
    }) => {

    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [faceDetailList, setFaceDetailList] = useState<FaceDetailList>([]);
    const [faceIndex, setFaceIndex] = useState<number>(0);
    const imageRef = React.useRef<HTMLImageElement>(null);

    const reset = () => {
        setFaceDetailList([]);
        setImage("");
    }

    const getFaceDetailList = (data: FaceDetailList): void => {
        setFaceDetailList(data);
        setLoading(false);

        setFaceIndex(0);
    }

    const handleOnImageLoad = (e: React.ChangeEvent<HTMLInputElement & any>): void => {
        const [file] = e.target.files;
        setImage(URL.createObjectURL(file));
        

        const imagePros = new AwsProcessImage();
        setLoading(true); 

        imagePros.ProcessImage(file, getFaceDetailList);
    }

    return (
        <div className="Configuration">
            <div className="container">

                <Visualize 
                    faceListLength={faceDetailList.length}
                    loading={loading}
                    getFaceDetail={setFaceIndex}
                    boundingBox={faceDetailList.length > 0 ? faceDetailList[faceIndex]['BoundingBox']! : {}}
                    displayStyle={{
                        opacity: image === "" ? 0 : 1,
                        height: `${imageRef?.current?.height}`,
                        width: `${imageRef?.current?.width}`
                    }}
                >
                    {
                        !image ? (
                            <Placeholder onImageLoad={handleOnImageLoad} />
                        ) : <img src={image} alt="" ref={imageRef} />
                    }
                </Visualize>

                <Sidebar data={faceDetailList[faceIndex]} loading={loading} reset={reset}/>

            </div>

            <footer>
                made by Yume Saiko with  <i className='fas fa-heart' style={{color: 'red'}}/> | <a href="https://github.com/YumeT023" target="_blank"><i className="fab fa-github"/></a>
            </footer>
        </div>
    );
}

export default Configuration;