const people = [
  { id: 1, firstName: 'Justin', lastName: 'Schwartzenberger', twitterHandle: 'schwarty', avatarUrl: 'https://pbs.twimg.com/profile_images/664117369535488000/KT3wsR_4_400x400.jpg' },
  { id: 2, firstName: 'Alyssa', lastName: 'Nicoll', twitterHandle: 'alyssanicoll', avatarUrl: 'https://pbs.twimg.com/profile_images/946884377044140033/DdMjjN-q_400x400.jpg' },
  { id: 3, firstName: 'Mike', lastName: 'Brocchi', twitterHandle: 'brocco', avatarUrl: 'https://pbs.twimg.com/profile_images/862142599548850176/e-moaKuq_400x400.jpg' },
  { id: 4, firstName: 'Austin', lastName: 'McDaniel', twitterHandle: 'amcdnl', avatarUrl: 'https://pbs.twimg.com/profile_images/927655779452076032/ayL9VDqO_400x400.jpg' },
  { id: 5, firstName: 'Bonnie', lastName: 'Brennan', twitterHandle: 'bonnster75', avatarUrl: 'https://pbs.twimg.com/profile_images/511873029857505280/VdDCD7y0_400x400.jpeg' },
  { id: 6, firstName: 'Aaron', lastName: 'Frost', twitterHandle: 'aaronfrost', avatarUrl: 'https://pbs.twimg.com/profile_images/751508904756908032/O-h9Z1PP_400x400.jpg' },
  { id: 7, firstName: 'Joe', lastName: 'Eames', twitterHandle: 'josepheames', avatarUrl: 'https://pbs.twimg.com/profile_images/547540451671040001/fMaJkPB2_400x400.jpeg' },
  { id: 8, firstName: 'Jecelyn', lastName: 'Yeen', twitterHandle: 'jecelynyeen', avatarUrl: 'https://pbs.twimg.com/profile_images/882746310582870016/o8M0EiFo_400x400.jpg' }
];

const episodes = [
  { id: '155', title: 'Dependency Injection', dateTime: '2018-04-03 16:00:00', videoUrl: 'http://ngair.io/ep155-2018', hosts: [1], panelists: [2,3,4,5], guests: [8]},
  { id: '153', title: 'NGXS: A New State Management for Angular Apps', dateTime: '2018-03-20 11:00:00', videoUrl: 'http://ngair.io/ep153-2018', hosts: [1], panelists: [2,3,5], guests: [4]},
  { id: '152', title: 'Countdown to ng-conf', dateTime: '2018-03-13 11:00:00', videoUrl: 'http://ngair.io/ep152-2018', hosts: [1], panelists: [2,3,4,5], guests: [6,7]}
];

const resolveFunctions = {
  Query: {
    episodes() {
      return episodes;
    },
    person(_, { id }) {
      return people.find(person => person.id === id);
    }
  },
  Person: {
    episodes(person) {
      return episodes.filter(episode =>
        episode.hosts.indexOf(person.id) >= 0 ||
        episode.panelists.indexOf(person.id) >= 0 ||
        episode.guests.indexOf(person.id) >= 0);
    }
  },
  Episode: {
    hosts(episode) {
      return people.find(person => episode.hosts.indexOf(person.id) >= 0);
    },
    panelists(episode) {
      return people.find(person => episode.panelists.indexOf(person.id) >= 0);
    },
    guests(episode) {
      return people.find(person => episode.guests.indexOf(person.id) >= 0);
    }
  }
};

export default resolveFunctions;
