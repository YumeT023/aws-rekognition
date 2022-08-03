import React from 'react';
import { FaceDetail } from "aws-sdk/clients/rekognition";
import { arrayAttribute } from "../../types";
import { Card } from '../../components';
import { Item } from '../../common';
import { filterT } from '../../components/types';
import AwsUtils from './AwsUtils';

/**
 * facedetail util class
 */
class AwsMapper {

  static mapKeyValueFromObject = (obj: object) => {
    return Object
      .entries(obj)
      .map((value) => {

        let [k, v] = value;

        if (k.toLocaleLowerCase().indexOf('value') > -1) {
          v = v === '0' ? false : true;
        } else {
          v = Number(v).toFixed(1);
        }

        return (
          <Item
            key={k}
            label={k}
            text={`${k.toLocaleLowerCase()}: ` + v}
          />
        )

      })
  }

  static renderList = (type: string, props: object, key: string, display: boolean) => (
    <Card
      title={type}
      color={{ head: 'violet' }}
      collapsible={true}
      isCollapsed={display}
      key={type}
    >
      {
        key === 'Confidence' ? (
          <Item
            key={key}
            label={key}
            text={parseFloat(props as unknown as string).toFixed(3)}
          />
        ) : this.mapKeyValueFromObject(props)
      }
    </Card>
  )


  static arrayMapper(arr: arrayAttribute, key: 'Landmarks' | 'Emotions', display = false) {

    return arr?.map((item) => {
      const properties = AwsUtils.getAttribute(item);

      const { Type, ...restProps } = properties;

      let type = AwsUtils.beautifyString(Type!, key);

      return this.renderList(type, restProps, key, display);

    })

  }

  static render(data: FaceDetail, filter: filterT, isCollapsed: boolean) {
    const {
      Landmarks,
      Emotions,
      ...restProps
    } = data;

    switch (filter) {
      case "Emotions":
        return this.arrayMapper(Emotions!, 'Emotions', isCollapsed);
      case "Landmarks":
        return this.arrayMapper(Landmarks!, 'Landmarks', isCollapsed);
      default:
        return Object
          .entries(restProps)
          .map((value) => {

            const [k, v] = value;

            return this.renderList(AwsUtils.beautifyString(k, k as keyof FaceDetail), v, k, isCollapsed)

          })
    }
  }

}


export default AwsMapper;