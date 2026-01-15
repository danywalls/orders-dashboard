import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NBAGame {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  date: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class NbaGameService {
  private apiUrl = '/api/nba-games';

  constructor(private http: HttpClient) {}

  /**
   * Get all NBA games
   */
  getGames(): Observable<NBAGame[]> {
    return this.http.get<NBAGame[]>(this.apiUrl);
  }

  /**
   * Get a specific NBA game by ID
   */
  getGame(id: string): Observable<NBAGame> {
    return this.http.get<NBAGame>(`${this.apiUrl}/${id}`);
  }

  /**
   * Get games for a specific team
   */
  getTeamGames(teamName: string): Observable<NBAGame[]> {
    return this.http.get<NBAGame[]>(`${this.apiUrl}/team/${teamName}`);
  }

  /**
   * Get today's games
   */
  getTodayGames(): Observable<NBAGame[]> {
    return this.http.get<NBAGame[]>(`${this.apiUrl}/today`);
  }

  /**
   * Create a new NBA game
   */
  createGame(game: Omit<NBAGame, 'id'>): Observable<NBAGame> {
    return this.http.post<NBAGame>(this.apiUrl, game);
  }

  /**
   * Update an NBA game
   */
  updateGame(id: string, game: Partial<NBAGame>): Observable<NBAGame> {
    return this.http.put<NBAGame>(`${this.apiUrl}/${id}`, game);
  }

  /**
   * Delete an NBA game
   */
  deleteGame(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
