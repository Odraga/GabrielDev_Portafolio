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
    const totalWeeks = moment(time).diff(dateLove, "days", true) / 7;
    const totalDays = Math.round(moment(time).diff(dateLove, "days"));

    setTimer({
      years: totalYears,
      months: totalMonths - totalYears * 12,
      weeks: Math.floor(totalWeeks - totalMonths * 4.3482),
      days: totalDays - Math.floor(totalWeeks * 7),
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
      <div className="text-center color-primary text-shadow-1 my-4">
        <h2>
          TIMER <span className="color-support">(GYM)</span>
        </h2>
        <small className="color-orange">
          {moment(dateLove).format("DD / MMMM / YYYY - HH:mm [PM]")}
        </small>
      </div>

      <div className="d-sm-flex justify-content-around mb-2">
        <div>
          <span>{timer.years} </span>
          <strong>Años</strong>
        </div>

        <div>
          <span>{timer.months} </span>
          <strong>Meses</strong>
        </div>

        <div>
          <span>{timer.weeks} </span>
          <strong>Semanas</strong>
        </div>

        <div>
          <span>{timer.days} </span>
          <strong>Dias</strong>
        </div>

        <div>
          <span>{timer.hours} </span>
          <strong>Horas</strong>
        </div>

        <div>
          <span>{timer.minutes} </span>
          <strong>Minutos</strong>
        </div>

        <div>
          <span>{timer.seconds} </span>
          <strong>Segundos</strong>
        </div>
      </div>
    </div>
  );
};

export default Timer;
