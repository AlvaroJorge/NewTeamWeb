$(document).ready(function () {
	$('#calendar').fullCalendar({
    events: [
    {
      title  : 'Visita Alhambra',
      start  : '2018-05-15'
    },
    {
      title  : 'Campaña Lectura',
      start  : '2018-05-20',
      end    : '2018-05-23'
    },
    {
      title  : 'Concierto Benéfico',
      start  : '2018-05-27T12:30:00',
      allDay : false // will make the time show
    }
  ]
  })
});