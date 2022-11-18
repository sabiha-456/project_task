import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid, Card, CardContent } from "@mui/material";
import "../App.css"
export const CourseDetails = () => {
  const params = useParams();
  const couseData = useSelector((state) => state.courseReducer.course);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getCourseDetails = couseData.filter(
      (item) => item.idCourse == params.id
    );
    setData(getCourseDetails);
    console.log(getCourseDetails);
  }, [couseData]);
  return (
    <div>
      <h1 style={{textAlign:"center"} }>Course Details</h1>
      <Grid container>
        {data.map((item) => {
          return (
            <>
            <Grid item xs={12} md={6} >
              <Card>
                  <CardContent className="img_Container" sx={{textAlign:"center"}}>
                      <img className="img_detail" src={item.imageUrl}   />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{background:"#D6EAF8"}}>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <h5 className="textName">Name : <span className="textSpan">{item.name}</span></h5>
                        <h5 className="textName">Subject Name : <span className="textSpan"> {item.subjectName}</span></h5>
                        <h5 className="textName">Fees (RS) : <span className="textSpan"> {item.amount}</span></h5>
                        <h5 className="textName">Fees ($) : <span className="textSpan"> {item.amountUsd}$</span></h5>
                        <h5 className="textName">Course Duration : <span className="textSpan"> {item.duration}</span></h5>
                        <h5 className="textName">Live Session Count : <span className="textSpan">{item.duration}</span></h5>
                        <h5 className="textName">Info: <span className="textSpan"> {item.info}</span></h5>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
    </div>
  );
};
