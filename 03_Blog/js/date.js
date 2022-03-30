var en_month = ['Jan','Fed','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const today = new Date();
const setCalendarData = (year, month) => {
      let calHtml = "";
      const setDate = new Date(year, month - 1, 1);
      const firstDay = setDate.getDate();
      const firstDayName = setDate.getDay();
      const lastDay = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
      ).getDate();
      const prevLastDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();

      let startDayCount = 1;
      let lastDayCount = 1;

      $(".calendarBox .calendar__day").remove();
      $(".calendarBox2 .calendar__day").remove();

      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 7; j++) {           
          if (i == 0 && j < firstDayName) {
            if (j == 0) {
              calHtml +=
                `<div style='background-color:#fff; color:red'; class='calendar__day horizontalGutter'><span>${(prevLastDay - (firstDayName - 1) + j)}</span><span></span></div>`;
            } else if (j == 5) {
              calHtml +=
                `<div style='background-color:#fff;' class='calendar__day'><span>${(prevLastDay - (firstDayName - 1) + j)}</span><span></span></div>`;
            } else {
              calHtml +=
                `<div style='background-color:#fff;' class='calendar__day horizontalGutter'><span>${(prevLastDay - (firstDayName - 1) + j)}</span><span></span></div>`;
            }
          }
          else if (i == 0 && j == firstDayName) {
            if (j == 0) {
              calHtml +=
                `<div style='background-color:#fff;' class='calendar__day horizontalGutter'><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            } else if (j == 5) {
              calHtml +=
                `<div style='background-color:#fff;' class='calendar__day'><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            } else {
              calHtml +=
                `<div style='background-color:#fff;' class='calendar__day horizontalGutter'><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            }
          }
          else if (i == 0 && j > firstDayName) {
            if (j == 0) {
              calHtml +=
                `<div style='background-color:#fff' class='calendar__day horizontalGutter'><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            } else if (j == 5) {
              calHtml +=
                `<div style='background-color:#fff' class='calendar__day'><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            } else {
              calHtml +=
                `<div style='background-color:#fff' class='calendar__day horizontalGutter'><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            }
          }
          else if (i > 0 && startDayCount <= lastDay) {
            if (j == 0) {
              calHtml +=
                `<div style='background-color:#fff; color:red'; class='calendar__day horizontalGutter verticalGutter'><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            } else if (j == 5) {
              calHtml +=
                `<div style='background-color:#fff;'class='calendar__day verticalGutter'><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            } else {
              calHtml +=
                `<div style='background-color:#fff;'class='calendar__day horizontalGutter verticalGutter'><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            }
          }
          else if (startDayCount > lastDay) {
            if (j == 0) {
              calHtml +=
                `<div style='background-color:#fff;' class='calendar__day horizontalGutter verticalGutter'><span>${lastDayCount++}</span><span></span></div>`;
            } else if (j == 5) {
              calHtml +=
                `<div style='background-color:#fff;' class='calendar__day verticalGutter'><span>${lastDayCount++}</span><span></span></div>`;
            } else {
              calHtml +=
                `<div style='background-color:#fff;' class='calendar__day horizontalGutter verticalGutter'><span>${lastDayCount++}</span><span></span></div>`;
            }
          }
        }
      }

      document
        .querySelector(".calendarBox")
        .insertAdjacentHTML("beforeend", calHtml);
        // today.setMonth(0); // 이거 변경해서 날짜 바꿀거야 ^_____^
        document.querySelector('.calendarMonth1').innerHTML = en_month[today.getMonth()];
        
        document
        .querySelector(".calendarBox2")
        .insertAdjacentHTML("beforeend", calHtml);
        document.querySelector('.calendarMonth2').innerHTML = en_month[today.getMonth()];
      };

    const setFixDayCount = number => {
      let fixNum = "";
      if (number < 10) {
        fixNum = "0" + number;
      } else {
        fixNum = number;
      }
      return fixNum;
    };

    if (today.getMonth() + 1 < 10) {
      setCalendarData(today.getFullYear(), "0" + (today.getMonth() + 1));
    } else {
      setCalendarData(today.getFullYear(), "" + (today.getMonth() + 1));
    }

    var daycount = today.getMonth();
    var Year =today.getFullYear();
    document.querySelector('.calendarYear1').innerHTML = Year;
    function next(){
      daycount++;
      if(daycount == 12)
      {
        daycount = 0;
        Year++;
      }
      setCalendarData(Year,daycount+1);
      document.querySelector('.calendarMonth1').innerHTML = en_month[daycount];
      document.querySelector('.calendarMonth2').innerHTML = en_month[daycount];
      document.querySelector('.calendarYear1').innerHTML = Year;
      document.querySelector('.calendarYear2').innerHTML = Year;
      document.querySelector('.Calendar_img').src = "./img/imgplus.png";
      $('.calendar01').css('transition','1s');
      $('.calendar01').css('opacity','0');
      $('.calendar01').css('transformOrigin','top left');
      $('.calendar01').css('transform',' rotateZ(160deg)');
      setTimeout(() => {
        $('.calendar01').css('transition','none');
        $('.calendar01').css('opacity','1');
        $('.calendar01').css('transform',' rotateZ(0deg)');
      }, 1000);
    }
    function prev(){
      daycount--;
      if(daycount == -1)
      {
        daycount = 11;
        Year--;
      }
      setCalendarData(Year,daycount+1);
      document.querySelector('.calendarMonth1').innerHTML = en_month[daycount];
      document.querySelector('.calendarMonth2').innerHTML = en_month[daycount];
      document.querySelector('.calendarYear1').innerHTML = Year;
      document.querySelector('.calendarYear2').innerHTML = Year;
      document.querySelector('.Calendar_img').src = "./img/imgplus.png";
      $('.calendar01').css('transition','none');
      $('.calendar01').css('transformOrigin','top left');
      $('.calendar01').css('transform',' rotateZ(160deg)');
      
      setTimeout(() => {
        $('.calendar01').css('transition','1s');
        $('.calendar01').css('opacity','1');
        $('.calendar01').css('transform',' rotateZ(0deg)');
      }, 0);
    }

    const monthAni = new Scene({  
      ".calendar__day": i => ({
        opacity: [0, 1],
        options: {
          duration: 1,
          delay: (i % 7) * 0.1 + Math.floor(i / 7) * 0.2,
        }
      }),
    }, {
      selector: true,
      direction: "alternate",
      iterationCount: "1",
      fillMode : 'forword', 
    });




var calendarDay = document.querySelectorAll('.calendarBox .calendar__day');
console.log(calendarDay);
for (let ch = 0; ch < calendarDay.length; ch++) {

    $(calendarDay[ch]).click(function(){
      var checkONE = document.createElement('span');
      checkONE.className='checkONE';
      calendarDay[ch].appendChild(checkONE);
      checkONE.style.opacity = 0.5;

      var textarea = document.createElement('textarea');
      textarea.className='textarea';
      calendarDay[ch].appendChild(textarea);
    })  

    function yellow(){
      $('.checkONE').last().css('background-color','#FEE893');
      $('.textarea').last().css('outline-color','#FEE893');
    }
    function pink(){
      $('.checkONE').last().css('background-color','#F3D4D1');
      $('.textarea').last().css('outline-color','#F3D4D1');
    }
    function orange(){
      $('.checkONE').last().css('background-color','#EFD5BC');
      $('.textarea').last().css('outline-color','#EFD5BC');
    }
    function green(){
      $('.checkONE').last().css('background-color','#CBE3CD');
      $('.textarea').last().css('outline-color','#CBE3CD');
    }
    function blue(){
      $('.checkONE').last().css('background-color','#B3D8EA');
      $('.textarea').last().css('outline-color','#B3D8EA');
    }
}



