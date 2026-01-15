import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NbaGameService, NBAGame } from './nba-game';

describe('NbaGameService', () => {
  let service: NbaGameService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NbaGameService],
    });
    service = TestBed.inject(NbaGameService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all games', () => {
    const mockGames: NBAGame[] = [
      {
        id: '1',
        homeTeam: 'Lakers',
        awayTeam: 'Celtics',
        homeScore: 110,
        awayScore: 105,
        date: '2026-01-13',
        status: 'Final',
      },
    ];

    service.getGames().subscribe((games) => {
      expect(games.length).toBe(1);
      expect(games[0].homeTeam).toBe('Lakers');
    });

    const req = httpMock.expectOne('/api/nba-games');
    expect(req.request.method).toBe('GET');
    req.flush(mockGames);
  });

  it('should get a specific game', () => {
    const mockGame: NBAGame = {
      id: '1',
      homeTeam: 'Lakers',
      awayTeam: 'Celtics',
      homeScore: 110,
      awayScore: 105,
      date: '2026-01-13',
      status: 'Final',
    };

    service.getGame('1').subscribe((game) => {
      expect(game.id).toBe('1');
      expect(game.homeTeam).toBe('Lakers');
    });

    const req = httpMock.expectOne('/api/nba-games/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockGame);
  });

  it('should get team games', () => {
    const mockGames: NBAGame[] = [];

    service.getTeamGames('Lakers').subscribe((games) => {
      expect(games.length).toBe(0);
    });

    const req = httpMock.expectOne('/api/nba-games/team/Lakers');
    expect(req.request.method).toBe('GET');
    req.flush(mockGames);
  });

  it('should get today\'s games', () => {
    const mockGames: NBAGame[] = [];

    service.getTodayGames().subscribe((games) => {
      expect(games.length).toBe(0);
    });

    const req = httpMock.expectOne('/api/nba-games/today');
    expect(req.request.method).toBe('GET');
    req.flush(mockGames);
  });

  it('should create a game', () => {
    const newGame = {
      homeTeam: 'Heat',
      awayTeam: 'Warriors',
      homeScore: 0,
      awayScore: 0,
      date: '2026-01-14',
      status: 'Scheduled',
    };

    service.createGame(newGame).subscribe((game) => {
      expect(game.id).toBeDefined();
    });

    const req = httpMock.expectOne('/api/nba-games');
    expect(req.request.method).toBe('POST');
    req.flush({ id: '2', ...newGame });
  });

  it('should update a game', () => {
    const updatedGame: Partial<NBAGame> = {
      homeScore: 115,
      awayScore: 110,
      status: 'Final',
    };

    service.updateGame('1', updatedGame).subscribe((game) => {
      expect(game.homeScore).toBe(115);
    });

    const req = httpMock.expectOne('/api/nba-games/1');
    expect(req.request.method).toBe('PUT');
    req.flush({
      id: '1',
      homeTeam: 'Lakers',
      awayTeam: 'Celtics',
      ...updatedGame,
      date: '2026-01-13',
    });
  });

  it('should delete a game', () => {
    service.deleteGame('1').subscribe(() => {
      expect(true).toBe(true);
    });

    const req = httpMock.expectOne('/api/nba-games/1');
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
