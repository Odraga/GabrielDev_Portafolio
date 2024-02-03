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
    const totalDays = moment(time).diff(dateLove, "days", true);
    const totalWeeks = moment(time).diff(dateLove, "weeks", true);
    const totalWeeksToWeeks = moment(time).date();

    setTimer({
      years: totalYears,
      months: totalMonths - totalYears * 12,
      weeks: Math.ceil(totalWeeksToWeeks / 7),
      days: Math.round((totalDays % 7) - Math.floor(totalWeeks / 7)),
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
      {/* <div className="text-center color-secondary text-shadow-1 my-4">
        <h2>
          TIMER <span className="color-primary ">(GYM)</span>
        </h2>
        <small className="color-orange">
          {moment(dateLove).format("DD / MMMM / YYYY - HH:mm [PM]")}
        </small>
      </div>

      <div className="row justify-content-evenly mx-3">
        <div className="border text-center rounded-5 shadow-1 mb-3 mx-md-3">
          <span className="font-size-3 text-shadow-1">{timer.years} </span>
          <div className="bgc-black p-1 rounded-bottom-right rounded-bottom-left">
            <span className="color-white font-size-2">Años</span>
          </div>
        </div>

        <div className="border text-center rounded-5 shadow-1 mb-3 mx-md-3">
          <span className="font-size-3 text-shadow-1">{timer.months} </span>
          <div className="bgc-black p-1 rounded-bottom-right rounded-bottom-left">
            <span className="color-white font-size-2">Meses</span>
          </div>
        </div>

        <div className="border text-center rounded-5 shadow-1 mb-3 mx-md-3">
          <span className="font-size-3 text-shadow-1">{timer.weeks} </span>
          <div className="bgc-black p-1 rounded-bottom-right rounded-bottom-left">
            <span className="color-white font-size-2">Semanas</span>
          </div>
        </div>

        <div className="border text-center rounded-5 shadow-1 mb-3 mx-md-3">
          <span className="font-size-3 text-shadow-1">{timer.days} </span>
          <div className="bgc-black p-1 rounded-bottom-right rounded-bottom-left">
            <span className="color-white font-size-2">Dias</span>
          </div>
        </div>

        <div className="border text-center rounded-5 shadow-1 mb-3 mx-md-3">
          <span className="font-size-3 text-shadow-1">{timer.hours} </span>
          <div className="bgc-black p-1 rounded-bottom-right rounded-bottom-left">
            <span className="color-white font-size-2">Horas</span>
          </div>
        </div>

        <div className="border text-center rounded-5 shadow-1 mb-3 mx-md-3">
          <span className="font-size-3 text-shadow-1">{timer.minutes} </span>
          <div className="bgc-black p-1 rounded-bottom-right rounded-bottom-left">
            <span className="color-white font-size-2">Minutos</span>
          </div>
        </div>

        <div className="border text-center rounded-5 shadow-1 mb-3 mx-md-2">
          <span className="font-size-3 text-shadow-1">{timer.seconds} </span>
          <div className="bgc-black p-1 rounded-bottom-right rounded-bottom-left">
            <span className="color-white font-size-2">Segundos</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Timer;
