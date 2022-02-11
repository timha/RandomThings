const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 21
    },
    {
      firstName: 'John',
      lastName: 'Smith',
      age: 23
    },
    {
      firstName: 'M',
      lastName: 'J',
      age: 28
    }
  ],
  _games: [
    {
      opponent: 'Trailblazers',
      teamPoints: 120,
      opponentPoints: 118
    },
    {
      opponent: 'SuperSonics',
      teamPoints: 106,
      opponentPoints: 91
    },
    {
      opponent: 'Warriors',
      teamPoints: 90,
      opponentPoints: 89
    }
  ],
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age
    }
    this._players.push(player)
  },
  addGame(opponent, teamPoints, oppPoints) {
    const game = {
      opponent,
      teamPoints,
      oppPoints
    }
    this._games.push(game)
  }
}

team.addPlayer('Steph', 'Curry', '28')
team.addPlayer('Lisa', 'Leslie', '44')
team.addPlayer('Bugs', 'Bunny', '76')
console.log(team.players)

team.addGame('Hawks', 80, 90)
team.addGame('Lakers', 84, 93)
team.addGame('Kings', 81, 92)
console.log(team.games)
