'use client';

import { Card, CardBody } from "./components/safe-material";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import moment from "moment";
import "moment/locale/th";
moment.locale("th");

import { Select, Option, Input, Button } from "@material-tailwind/react";


export default function Home() {

  const [data, setData] = useState([])
  const [selectType, setSelectType] = useState("1")

  const fetchData = async () => {
    try {
      const res = await axios.post('/api/image_1', {
        type: selectType
      });
      console.log(res.data);
      if (res.status === 200) {
        setData(res.data)
      }
    } catch (error) {
      console.error('Axios error:', error);
    }
  };

  const fetchDataFace = async () => {
    try {
      const res = await axios.get('/api/image_1/face');
      console.log(res.data);
      if (res.status === 200) {
        setData(res.data)
      }
    } catch (error) {
      console.error('Axios error:', error);
    }
  };

  const fetchDataHelmet = async () => {
    try {
      const res = await axios.get('/api/image_1/helmet');
      console.log(res.data);
      if (res.status === 200) {
        setData(res.data)
      }
    } catch (error) {
      console.error('Axios error:', error);
    }
  };

  useEffect(() => {
    // fetchDataFace();
    // fetchDataHelmet()
    fetchData()
  }, [selectType]);

  return (
    <div className="bg-gray-200 px-8 py-8 h-screen">

      <Card>
        <CardBody>
          <div className="flex gap-4 w-1/3">
            <Select
              label="เลือก"
              value={selectType}
              onChange={(value) => setSelectType(value)}
              placeholder="เลือกประเภท"
              {...({} as any)}
            >
              <Option value="1">หน้าคน</Option>
              <Option value="2">หมวกกันน็อค</Option>
            </Select>
            {/* 
            <Input type="date" label="เลือกวันที่"  {...({} as any)} />
            <Input type="time" label="เลือกเวลา"  {...({} as any)} /> */}

            <Button color="deep-purple" {...({} as any)}>ค้นหา</Button>

          </div>
        </CardBody>
      </Card>

      <Card className="mt-4">
        <CardBody>
          <div className="flex flex-wrap  ">
            {data?.map((item: any) => (
              <div className="w-full md:w-1/6 p-3" key={item.idx}>
                <Card className="p-4">
                  <div className="flex flex-row gap-2">
                    <div className="w-full">
                      
                      <Image
                        src={`https://otopthaishop.com/image_processing/image_1/${selectType === "1" ? item.face_img : item.helmet_img}`}
                        width={900}
                        height={900}
                        alt=""
                      />
                      <div className="flex flex-row md:flex-col gap-2 mt-2">
                        <div>
                          ประเภท : {selectType === "1" ? "หน้าคน" : "หมวกกันน็อค"}
                        </div>
                        <div>วันที่ : {moment(selectType === "1" ? item.dateofface : item.dateofhel).add(543, 'year').format("D MMMM YYYY")}
                        </div>
                        <div>เวลา : {selectType === "1" ? item.timeofface : item.timeofhel}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>




    </div>
  );
}
