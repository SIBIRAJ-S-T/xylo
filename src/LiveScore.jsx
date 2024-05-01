import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LiveCricketMatches = () => {
  const [liveMatches, setLiveMatches] = useState([]);

  useEffect(() => {
    const fetchLiveMatches = async () => {
      const options = {
        method: 'GET',
        url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming',
        headers: {
          'X-RapidAPI-Key': 'e6e6368a99msh0ecbcbb33b2d807p1dde11jsnea5223eae7a1',
          'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log('API response:', response.data); // Log API response
        // Find the series with name "Indian Premier League 2024"
        const iplSeries = response.data.typeMatches.find(matchType => {
          return matchType.seriesMatches.some(series => {
            return series.seriesAdWrapper && series.seriesAdWrapper.seriesName === "Indian Premier League 2024";
          });
        });
        // Set live matches state to only IPL matches or empty array if not found
        setLiveMatches(iplSeries ? [iplSeries] : []);
      } catch (error) {
        console.error('Error fetching live matches:', error);
      }
    };

    fetchLiveMatches();
  }, []);

  console.log('liveMatches:', liveMatches); // Log liveMatches state

  return (
    <div className="live-cricket-matches">
      <h2>Live Cricket Matches</h2>
      {/* Map over liveMatches if it is an array */}
      {Array.isArray(liveMatches) && liveMatches.map((matchType, index) => (
        <div key={index}>
          {/* Map over seriesMatches for each matchType */}
          {matchType.seriesMatches.map((series, seriesIndex) => (
            <React.Fragment key={seriesIndex}>
              {/* Check if series has matches */}
              {series.seriesAdWrapper && series.seriesAdWrapper.matches && (
                <div>
                  {/* Map over matches for each series */}
                  {series.seriesAdWrapper.matches.map((match, matchIndex) => (
                    <div key={matchIndex}>
                      <p>Match: {match.matchInfo.team1.teamName} vs {match.matchInfo.team2.teamName}</p>
                      <p>Status: {new Date(parseInt(match.matchInfo.startDate)).toLocaleString()}</p>
                      {/* Display match score if available */}
                      {match.matchScore && match.matchScore.team1Score?.inngs1 && match.matchScore.team2Score?.inngs1 && (
                        <div>
                          <p>Team 1 Score: {match.matchScore.team1Score.inngs1.runs}/{match.matchScore.team1Score.inngs1.wickets} | Overs: {match.matchScore.team1Score.inngs1.overs}</p>
                          <p>Team 2 Score: {match.matchScore.team2Score.inngs1.runs}/{match.matchScore.team2Score.inngs1.wickets} | Overs: {match.matchScore.team2Score.inngs1.overs}</p>
                        </div>
                      )}
                      {/* Add more match details as needed */}
                    </div>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LiveCricketMatches;
