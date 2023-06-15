export const EVENTS = [
  {
    event_id: 1,
    title: "Event 1",
    start: new Date(new Date(new Date().setHours(9)).setMinutes(30)),
    end: new Date(new Date(new Date().setHours(10)).setMinutes(30)),
    room_id: 1
  },
  {
    event_id: 2,
    title: "Event 2",
    start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
    room_id: 2
  },
  {
    event_id: 3,
    title: "Event 3",
    start: new Date(new Date(new Date(new Date().setHours(3)).setMinutes(0))),
    end: new Date(new Date(new Date(new Date().setHours(4)).setMinutes(0))),
    room_id: 1
  },
  {
    event_id: 4,
    title: "Event 4",
    start: new Date(new Date(new Date(new Date().setHours(9)).setMinutes(0))),
    end: new Date(
      new Date(new Date(new Date().setHours(10)).setMinutes(0))),
    room_id: 2
  },
  {
    event_id: 5,
    title: "Event 5",
    start: new Date(
      new Date(new Date(new Date().setHours(10)).setMinutes(0))),
    end: new Date(
      new Date(new Date(new Date().setHours(11)).setMinutes(0))),
    room_id: 4
  },
  {
    event_id: 6,
    title: "Event 6",
    start: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
    room_id: 2
  },
  {
    event_id: 7,
    title: "Event 7",
    start: new Date(
      new Date(new Date(new Date().setHours(11)).setMinutes(0))),
    end: new Date(
      new Date(new Date(new Date().setHours(12)).setMinutes(0)) ),
    room_id: 3
  },
  {
    event_id: 8,
    title: "Event 8",
    start: new Date(
      new Date(new Date(new Date().setHours(13)).setMinutes(0))),
    end: new Date(
      new Date(new Date(new Date().setHours(14)).setMinutes(0))),
    room_id: 4
  },
  {
    event_id: 9,
    title: "Event 11",
    start: new Date(
      new Date(new Date(new Date().setHours(13)).setMinutes(0))),
    end: new Date(
      new Date(new Date(new Date().setHours(15)).setMinutes(30))),
    room_id: 1
  },
  {
    event_id: 10,
    title: "Event 9",
    start: new Date(
      new Date(new Date(new Date().setHours(15)).setMinutes(0))),
    end: new Date(
      new Date(new Date(new Date().setHours(16)).setMinutes(30))),
    room_id: 2
  },
  {
    event_id: 11,
    title: "Event 10",
    start: new Date(
      new Date(new Date(new Date().setHours(11)).setMinutes(0))),
    end: new Date(
      new Date(new Date(new Date().setHours(15)).setMinutes(0))),
    room_id: 1
  }
];

export const RESOURCES = [
  {
    room_id: 1,
    title: "OP-1",
    des: 'Hygiene Column 1',
    color: "#ab2d2d"
  },
  {
    room_id: 2,
    title: "OP-2",
    des: 'Hygiene Column 2',
    color: "#58ab2d"
  },
  {
    room_id: 3,
    title: "OP-3",
    des: 'Doctor 1',
    color: "#a001a2"
  },
  {
    room_id: 4,
    title: "OP-4 New Patient",
    des: 'Dr. Column 2',
    color: "#08c5bd"
  },
  {
    room_id: 5,
    title: "ZOthrOffice",
    des: 'Patients seen at other',
    color: "#08c5fd"
  }
];
