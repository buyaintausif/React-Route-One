
import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';


const LineChart = () => {

    const marks=[
        {
          "student_id": 1,
          "student_name": "Alice",
          "math_mark": 85,
          "physics_mark": 90,
          "chemistry_mark": 88
        },
        {
          "student_id": 2,
          "student_name": "Bob",
          "math_mark": 80,
          "physics_mark": 82,
          "chemistry_mark": 85
        },
        {
          "student_id": 3,
          "student_name": "Charlie",
          "math_mark": 75,
          "physics_mark": 78,
          "chemistry_mark": 80
        },
        {
          "student_id": 4,
          "student_name": "David",
          "math_mark": 90,
          "physics_mark": 88,
          "chemistry_mark": 85
        },
        {
          "student_id": 5,
          "student_name": "Emma",
          "math_mark": 85,
          "physics_mark": 82,
          "chemistry_mark": 88
        },
        {
          "student_id": 6,
          "student_name": "Frank",
          "math_mark": 80,
          "physics_mark": 82,
          "chemistry_mark": 85
        },
        {
          "student_id": 7,
          "student_name": "Grace",
          "math_mark": 90,
          "physics_mark": 92,
          "chemistry_mark": 88
        },
        {
          "student_id": 8,
          "student_name": "Harry",
          "math_mark": 85,
          "physics_mark": 88,
          "chemistry_mark": 90
        },
        {
          "student_id": 9,
          "student_name": "Ivy",
          "math_mark": 80,
          "physics_mark": 82,
          "chemistry_mark": 85
        },
        {
          "student_id": 10,
          "student_name": "Jack",
          "math_mark": 90,
          "physics_mark": 88,
          "chemistry_mark": 85
        }
      ];      
      
    return (
        <div>
           <LChart width={400} height={400} data={marks} >
            <XAxis ></XAxis>
            <YAxis></YAxis>
    <Line  dataKey="math_mark" stroke='red'/>
    <Line  dataKey="physics_mark"/>
    <Line  dataKey="chemistry_mark"/>
              </LChart> 
        </div>
    );
};

export default LineChart;