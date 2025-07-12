export type BusRoute = {
  route_no: string;
  from: string;
  to: string;
  stops: string[];
  start_time: string;
  end_time: string;
  frequency: string;
};

const routeData = {
    "routes": [
      {
        "route_no": "51",
        "from": "Swargate",
        "to": "Kothrud Depot",
        "stops": ["Swargate", "Tilak Road", "Deccan", "Nal Stop", "Karve Putala", "Kothrud Depot"],
        "start_time": "6:00 AM",
        "end_time": "9:30 PM",
        "frequency": "15 mins"
      },
      {
        "route_no": "80",
        "from": "Pune Station",
        "to": "MIT-WPU",
        "stops": ["Pune Station", "Bund Garden", "Sambhaji Bridge", "FC Road", "BMCC", "MIT-WPU"],
        "start_time": "7:00 AM",
        "end_time": "8:00 PM",
        "frequency": "20 mins"
      },
      {
        "route_no": "104",
        "from": "Kothrud Depot",
        "to": "Pune Station",
        "stops": ["Kothrud Depot", "Karve Putala", "Nal Stop", "Deccan", "Shivajinagar", "Pune Station"],
        "start_time": "5:30 AM",
        "end_time": "10:00 PM",
        "frequency": "10 mins"
      },
      {
        "route_no": "150",
        "from": "Pune Station",
        "to": "Viman Nagar",
        "stops": ["Pune Station", "Yerwada", "Gunjan Chowk", "Ramwadi", "Phoenix Mall", "Viman Nagar"],
        "start_time": "6:00 AM",
        "end_time": "9:00 PM",
        "frequency": "15 mins"
      },
      {
        "route_no": "60",
        "from": "Swargate",
        "to": "Hadapsar",
        "stops": ["Swargate", "Jedhe Chowk", "Salisbury Park", "Fatima Nagar", "Magarpatta", "Hadapsar"],
        "start_time": "6:30 AM",
        "end_time": "9:30 PM",
        "frequency": "10 mins"
      },
      {
        "route_no": "93",
        "from": "Kothrud Depot",
        "to": "Hadapsar",
        "stops": ["Kothrud Depot", "Nal Stop", "Deccan", "Swargate", "Fatima Nagar", "Hadapsar"],
        "start_time": "7:00 AM",
        "end_time": "9:00 PM",
        "frequency": "20 mins"
      },
      {
        "route_no": "166",
        "from": "Katraj",
        "to": "Shivajinagar",
        "stops": ["Katraj", "Bharati Vidyapeeth", "Swargate", "Tilak Road", "Deccan", "Shivajinagar"],
        "start_time": "6:00 AM",
        "end_time": "10:00 PM",
        "frequency": "10 mins"
      },
      {
        "route_no": "135",
        "from": "Vishrantwadi",
        "to": "Swargate",
        "stops": ["Vishrantwadi", "Yerwada", "Gunjan Chowk", "Bund Garden", "Pune Station", "Swargate"],
        "start_time": "6:15 AM",
        "end_time": "9:45 PM",
        "frequency": "20 mins"
      },
      {
        "route_no": "99",
        "from": "Pune Station",
        "to": "Baner",
        "stops": ["Pune Station", "Shivajinagar", "Senapati Bapat Road", "University Chowk", "Aundh", "Baner"],
        "start_time": "6:00 AM",
        "end_time": "9:00 PM",
        "frequency": "25 mins"
      },
      {
        "route_no": "120",
        "from": "Nigdi",
        "to": "Swargate",
        "stops": ["Nigdi", "Akurdi", "Pimpri", "Kasarwadi", "Bopodi", "Shivajinagar", "Swargate"],
        "start_time": "5:45 AM",
        "end_time": "9:15 PM",
        "frequency": "15 mins"
      }
    ]
  };

export {routeData};
  