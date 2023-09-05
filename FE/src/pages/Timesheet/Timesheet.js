import React, { useEffect, useState } from "react";
import Layoutbasic from "../../Layout/Layoutbasic";
import { getAccordionSummaryUtilityClass, Grid } from "@mui/material";
import "./Timesheet.css";
function Timesheet() {
  const [dataRows, setDataRows] = useState([
    {
        "id": 1,
        "name": "Employee 1",
        "Day0": 0,
        "Day1": 0,
        "Day2": 0,
        "Day3": 0,
        "Day4": 0,
        "Day5": 0,
        "Day6": 0,
        "Day7": 0,
        "Day8": 0,
        "Day9": 0,
        "Day10": 0,
        "Day11": 0,
        "Day12": 0,
        "Day13": 0,
        "Day14": 0,
        "Day15": 2,
        "Day16": 8,
        "Day17": 0,
        "Day18": 0,
        "Day19": 0,
        "Day20": 0,
        "Day21": 0,
        "Day22": 0,
        "Day23": 0,
        "Day24": 0,
        "Day25": 0,
        "Day26": 0,
        "Day27": 0,
        "Day28": 0,
        "Day29": 0,
        "Day30": 0,
        "Day31": 0
    },
    {
        "id": 2,
        "name": "Employee 2",
        "Day0": 0,
        "Day1": 0,
        "Day2": 0,
        "Day3": 0,
        "Day4": 0,
        "Day5": 0,
        "Day6": 0,
        "Day7": 0,
        "Day8": 0,
        "Day9": 0,
        "Day10": 0,
        "Day11": 0,
        "Day12": 0,
        "Day13": 0,
        "Day14": 0,
        "Day15": 2,
        "Day16": 5,
        "Day17": 0,
        "Day18": 0,
        "Day19": 0,
        "Day20": 0,
        "Day21": 0,
        "Day22": 0,
        "Day23": 0,
        "Day24": 0,
        "Day25": 0,
        "Day26": 0,
        "Day27": 0,
        "Day28": 0,
        "Day29": 0,
        "Day30": 0,
        "Day31": 0
    },
    {
        "id": 3,
        "name": "Employee 3",
        "Day0": 0,
        "Day1": 0,
        "Day2": 0,
        "Day3": 0,
        "Day4": 0,
        "Day5": 0,
        "Day6": 0,
        "Day7": 0,
        "Day8": 0,
        "Day9": 0,
        "Day10": 0,
        "Day11": 0,
        "Day12": 0,
        "Day13": 0,
        "Day14": 0,
        "Day15": 0,
        "Day16": 0,
        "Day17": 0,
        "Day18": 0,
        "Day19": 0,
        "Day20": 0,
        "Day21": 0,
        "Day22": 0,
        "Day23": 0,
        "Day24": 0,
        "Day25": 0,
        "Day26": 0,
        "Day27": 0,
        "Day28": 0,
        "Day29": 0,
        "Day30": 0,
        "Day31": 0
    },
    {
        "id": 4,
        "name": "John Cena",
        "Day0": 0,
        "Day1": 0,
        "Day2": 0,
        "Day3": 0,
        "Day4": 0,
        "Day5": 0,
        "Day6": 0,
        "Day7": 0,
        "Day8": 0,
        "Day9": 0,
        "Day10": 0,
        "Day11": 0,
        "Day12": 0,
        "Day13": 0,
        "Day14": 0,
        "Day15": 0,
        "Day16": 0,
        "Day17": 0,
        "Day18": 0,
        "Day19": 0,
        "Day20": 0,
        "Day21": 0,
        "Day22": 0,
        "Day23": 0,
        "Day24": 0,
        "Day25": 0,
        "Day26": 0,
        "Day27": 0,
        "Day28": 0,
        "Day29": 0,
        "Day30": 0,
        "Day31": 0
    },
     {
        "id": 5,
        "name": "My Test name",
        "Day0": 0,
        "Day1": 0,
        "Day2": 0,
        "Day3": 0,
        "Day4": 0,
        "Day5": 0,
        "Day6": 0,
        "Day7": 0,
        "Day8": 0,
        "Day9": 0,
        "Day10": 0,
        "Day11": 0,
        "Day12": 0,
        "Day13": 0,
        "Day14": 0,
        "Day15": 2,
        "Day16": 8,
        "Day17": 0,
        "Day18": 0,
        "Day19": 0,
        "Day20": 0,
        "Day21": 0,
        "Day22": 0,
        "Day23": 0,
        "Day24": 0,
        "Day25": 0,
        "Day26": 0,
        "Day27": 0,
        "Day28": 0,
        "Day29": 0,
        "Day30": 0,
        "Day31": 0
    },
    {
        "id": 6,
        "name": "Test Jpmorgan",
        "Day0": 0,
        "Day1": 0,
        "Day2": 0,
        "Day3": 0,
        "Day4": 0,
        "Day5": 0,
        "Day6": 0,
        "Day7": 0,
        "Day8": 0,
        "Day9": 0,
        "Day10": 0,
        "Day11": 0,
        "Day12": 0,
        "Day13": 0,
        "Day14": 0,
        "Day15": 2,
        "Day16": 5,
        "Day17": 0,
        "Day18": 0,
        "Day19": 0,
        "Day20": 0,
        "Day21": 0,
        "Day22": 0,
        "Day23": 0,
        "Day24": 0,
        "Day25": 0,
        "Day26": 0,
        "Day27": 0,
        "Day28": 0,
        "Day29": 0,
        "Day30": 0,
        "Day31": 0
    },
    {
        "id": 7,
        "name": "Test Coop",
        "Day0": 0,
        "Day1": 0,
        "Day2": 0,
        "Day3": 0,
        "Day4": 0,
        "Day5": 0,
        "Day6": 0,
        "Day7": 0,
        "Day8": 0,
        "Day9": 0,
        "Day10": 0,
        "Day11": 0,
        "Day12": 0,
        "Day13": 0,
        "Day14": 0,
        "Day15": 0,
        "Day16": 0,
        "Day17": 0,
        "Day18": 0,
        "Day19": 0,
        "Day20": 0,
        "Day21": 0,
        "Day22": 0,
        "Day23": 0,
        "Day24": 0,
        "Day25": 0,
        "Day26": 0,
        "Day27": 0,
        "Day28": 0,
        "Day29": 0,
        "Day30": 0,
        "Day31": 0
    },
    {
        "id": 8,
        "name": "MyEmp",
        "Day0": 0,
        "Day1": 0,
        "Day2": 0,
        "Day3": 0,
        "Day4": 0,
        "Day5": 0,
        "Day6": 0,
        "Day7": 0,
        "Day8": 0,
        "Day9": 0,
        "Day10": 0,
        "Day11": 0,
        "Day12": 0,
        "Day13": 0,
        "Day14": 0,
        "Day15": 0,
        "Day16": 0,
        "Day17": 0,
        "Day18": 0,
        "Day19": 0,
        "Day20": 0,
        "Day21": 0,
        "Day22": 0,
        "Day23": 0,
        "Day24": 0,
        "Day25": 0,
        "Day26": 0,
        "Day27": 0,
        "Day28": 0,
        "Day29": 0,
        "Day30": 0,
        "Day31": 0
    }
]);
  const [dataCols, setDataCols] = useState([]);

  useEffect(() => {
    let now = new Date();
    let totalDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    console.log(totalDays);

    let tempCols = ["Id", "Name"];
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let tempRows = [{ id: 1, name: "Employee 1" }];
    let currMonth = monthNames[now.getMonth()];
    if (totalDays > 0) {
      for (let i = 0; i <= totalDays; i++) {
        tempCols.push(currMonth + " " + i);
        tempRows[0][`Day${i}`] = i + "hrs";
      }
    }
    tempCols.push('Total Hrs')

    setDataCols(tempCols);
    // setDataRows(tempRows);
  }, []);

  const getHrs = (row) => {
      let total = 0;
      Object.keys(row).map((key, index) => {
          if (index > 1) {
             total = total+row[key]
          }
        });
    return total;
  };
  return (
    <Layoutbasic>
      <Grid container style={{marginTop:'2rem'}}>
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={10}>
          <div id="timeshee__table">
            <table>
              <tr>
                {dataCols.map((col) => (
                  <>
                    <th style={{width:"70%"}}>{col}</th>
                  </>
                ))}
              </tr>
              {dataRows.map((drow, did) => {
                return (
                  <tr>
                    <td>{drow.id}</td>
                    <td>{drow.name}</td>
                    {
                       Object.keys(drow).map((key, index) => {
                        if (index > 1) return <td>{drow[key]}H</td>;
                      })
                    }
                    <td>{getHrs(drow)}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </Grid>
        <Grid item xs={12} md={1}></Grid>
      </Grid>
    </Layoutbasic>
  );
}

export default Timesheet;
