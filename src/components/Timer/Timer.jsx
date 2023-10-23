import React, { useEffect, useState } from "react";
import Moment from "moment";
import moment from "moment";

const Timer = () => {
  const [time, setCurrentTime] = useState(moment());
  const dateLove = new Date("2023-07-23T12:49-0400");
  const [timer, setTimer] = useState({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const count = () => {
    setCurrentTime(moment());

    const totalYears = moment(time).diff(dateLove, "years");
    const totalMonths = moment(time).diff(dateLove, "months");
    const totalWeeks = moment(time).diff(dateLove, "weeks");
    const totalDays = moment(time).diff(dateLove, "days");

    setTimer({
      years: totalYears,
      months: totalMonths - totalYears * 12,
      weeks: totalWeeks - Math.floor(totalMonths * 4.3482),
      days: totalDays - totalWeeks * 7,
      hours: moment(time).diff(dateLove, "hours") % 24,
      minutes: moment(time).diff(dateLove, "minutes") % 60,
      seconds: moment(time).diff(dateLove, "seconds") % 60,
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      count();
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div>
      <div>
        <h2>TIMER</h2>
        <small>
          {moment(dateLove).format("DD / MMMM / YYYY - HH:mm [PM]")}
        </small>
      </div>
      <br />
      <br />
      <div>
        <div>
          <span>{timer.years} </span>
          <strong>Años</strong>
        </div>
        <hr />
        <div>
          <span>{timer.months} </span>
          <strong>Meses</strong>
        </div>
        <hr />
        <div>
          <span>{timer.weeks} </span>
          <strong>Semanas</strong>
        </div>
        <hr />
        <div>
          <span>{timer.days} </span>
          <strong>Dias</strong>
        </div>
        <hr />
        <div>
          <span>{timer.hours} </span>
          <strong>Horas</strong>
        </div>
        <hr />
        <div>
          <span>{timer.minutes} </span>
          <strong>Minutos</strong>
        </div>
        <hr />
        <div>
          <span>{timer.seconds} </span>
          <strong>Segundos</strong>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Timer;
