import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Grid, Card, CardContent, Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

export const CourseList = () => {
  const dispatch = useDispatch();
  const couseData = useSelector((state) => state.courseReducer.course);
  const navigate=useNavigate()
  const [data, setData] = useState([]);

  const fetchData = async () => {
    if (couseData.length > 0) {
      setData([...couseData]);
    } else {
      const res = await axios.get(
        "https://api.bricketc.com/bricketc-backend-php/get_all_courses.php"
      );
      dispatch({
        type: "SET_COURSE",
        data: res.data.body,
      });
      setData(res.data.body);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleCourseDetails = (item) =>{
    navigate(`/coursedetails/${item.idCourse}`,)
  }
  return (
    <div>

      
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>

        </Grid>
        <Grid item xs={12} md={5} textAlign="center">
        <h1>Courses Web Portfolio</h1>
        </Grid>
        <Grid item xs={12} md={3}>

        </Grid>
        {data.length > 0 &&
          data.map((item) => {
            return (
              <Grid item xs={12} md={3} sm={6} justifyContent="center">
                <Card>
                  <CardContent sx={{textAlign:"center",height:"400px"}} onClick={()=>handleCourseDetails(item)}>
                    <img src={item.imageUrl} alt={item.name} width="250" />
                    <h3>{item.name}</h3>
                    <Button onClick={()=>handleCourseDetails(item)} color="success" variant="contained">More Details</Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};
