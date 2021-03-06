﻿"use strict";

const NFLv3PlayByPlayClient = require('./NFLv3/NFLv3PlayByPlay');
const NFLv3ProjectionsClient = require('./NFLv3/NFLv3Projections');
const NFLv3RotoBallerArticlesClient = require('./NFLv3/NFLv3RotoBallerArticles');
const NFLv3RotoBallerPremiumNewsClient = require('./NFLv3/NFLv3RotoBallerPremiumNews');
const NFLv3ScoresClient = require('./NFLv3/NFLv3Scores');
const NFLv3StatsClient = require('./NFLv3/NFLv3Stats');
const NFLv3OddsClient = require('./NFLv3/NFLv3Odds');
const NFLv3StatsLiveBetaClient = require('./NFLv3/NFLv3StatsLiveBeta');
const MLBv2Client = require('./MLB/MLBv2');
const MLBv3PlayByPlayClient = require('./MLB/MLBv3PlayByPlay');
const MLBv3ProjectionsClient = require('./MLB/MLBv3Projections');
const MLBv3RotoBallerArticlesClient = require('./MLB/MLBv3RotoBallerArticles');
const MLBv3RotoBallerPremiumNewsClient = require('./MLB/MLBv3RotoBallerPremiumNews');
const MLBv3ScoresClient = require('./MLB/MLBv3Scores');
const MLBv3StatsClient = require('./MLB/MLBv3Stats');
const MLBv3OddsClient = require('./MLB/MLBv3Odds');
const NBAv2Client = require('./NBA/NBAv2');
const NBAv3PlayByPlayClient = require('./NBA/NBAv3PlayByPlay');
const NBAv3ProjectionsClient = require('./NBA/NBAv3Projections');
const NBAv3RotoBallerArticlesClient = require('./NBA/NBAv3RotoBallerArticles');
const NBAv3RotoBallerPremiumNewsClient = require('./NBA/NBAv3RotoBallerPremiumNews');
const NBAv3ScoresClient = require('./NBA/NBAv3Scores');
const NBAv3StatsClient = require('./NBA/NBAv3Stats');
const NBAv3OddsClient = require('./NBA/NBAv3Odds');
const NHLv2Client = require('./NHL/NHLv2');
const NHLv3PlayByPlayClient = require('./NHL/NHLv3PlayByPlay');
const NHLv3ProjectionsClient = require('./NHL/NHLv3Projections');
const NHLv3ScoresClient = require('./NHL/NHLv3Scores');
const NHLv3StatsClient = require('./NHL/NHLv3Stats');
const NHLv3OddsClient = require('./NHL/NHLv3Odds');
const CFBv3ScoresClient = require('./CFB/CFBv3Scores');
const CFBv3StatsClient = require('./CFB/CFBv3Stats');
const CFBv3OddsClient = require('./CFB/CFBv3Odds');
const CFBv3ProjectionsClient = require('./CFB/CFBv3Projections');
const CBBv2Client = require('./CBB/CBBv2');
const CBBv3ScoresClient = require('./CBB/CBBv3Scores');
const CBBv3StatsClient = require('./CBB/CBBv3Stats');
const CBBv3OddsClient = require('./CBB/CBBv3Odds');
const Golfv2Client = require('./Golf/Golfv2');
const NASCARv2Client = require('./Nascar/NASCARv2');
const Soccerv2Client = require('./Soccer/Soccerv2');
const Soccerv3ProjectionsClient = require('./Soccer/Soccerv3Projections');
const Soccerv3ScoresClient = require('./Soccer/Soccerv3Scores');
const Soccerv3StatsClient = require('./Soccer/Soccerv3Stats');
const Soccerv3OddsClient = require('./Soccer/Soccerv3Odds');

class FantasyDataClient {
    constructor(apiKeys){
        this.NFLv3PlayByPlayClient = new NFLv3PlayByPlayClient(apiKeys.NFLv3PlayByPlayClient);
        this.NFLv3ProjectionsClient = new NFLv3ProjectionsClient(apiKeys.NFLv3ProjectionsClient);
        this.NFLv3RotoBallerArticlesClient = new NFLv3RotoBallerArticlesClient(apiKeys.NFLv3RotoBallerArticlesClient);
        this.NFLv3RotoBallerPremiumNewsClient = new NFLv3RotoBallerPremiumNewsClient(apiKeys.NFLv3RotoBallerPremiumNewsClient);
        this.NFLv3ScoresClient = new NFLv3ScoresClient(apiKeys.NFLv3ScoresClient);
        this.NFLv3StatsClient = new NFLv3StatsClient(apiKeys.NFLv3StatsClient);
        this.NFLv3OddsClient = new NFLv3OddsClient(apiKeys.NFLv3OddsClient);
        this.NFLv3StatsLiveBetaClient = new NFLv3StatsLiveBetaClient(apiKeys.NFLv3StatsLiveBetaClient);
        this.MLBv2Client = new MLBv2Client(apiKeys.MLBv2Client);
        this.MLBv3PlayByPlayClient = new MLBv3PlayByPlayClient(apiKeys.MLBv3PlayByPlayClient);
        this.MLBv3ProjectionsClient = new MLBv3ProjectionsClient(apiKeys.MLBv3ProjectionsClient);
        this.MLBv3RotoBallerArticlesClient = new MLBv3RotoBallerArticlesClient(apiKeys.MLBv3RotoBallerArticlesClient);
        this.MLBv3RotoBallerPremiumNewsClient = new MLBv3RotoBallerPremiumNewsClient(apiKeys.MLBv3RotoBallerPremiumNewsClient);
        this.MLBv3ScoresClient = new MLBv3ScoresClient(apiKeys.MLBv3ScoresClient);
        this.MLBv3StatsClient = new MLBv3StatsClient(apiKeys.MLBv3StatsClient);
        this.MLBv3OddsClient = new MLBv3OddsClient(apiKeys.MLBv3OddsClient);
        this.NBAv2Client = new NBAv2Client(apiKeys.NBAv2Client);
        this.NBAv3PlayByPlayClient = new NBAv3PlayByPlayClient(apiKeys.NBAv3PlayByPlayClient);
        this.NBAv3ProjectionsClient = new NBAv3ProjectionsClient(apiKeys.NBAv3ProjectionsClient);
        this.NBAv3RotoBallerArticlesClient = new NBAv3RotoBallerArticlesClient(apiKeys.NBAv3RotoBallerArticlesClient);
        this.NBAv3RotoBallerPremiumNewsClient = new NBAv3RotoBallerPremiumNewsClient(apiKeys.NBAv3RotoBallerPremiumNewsClient);
        this.NBAv3ScoresClient = new NBAv3ScoresClient(apiKeys.NBAv3ScoresClient);
        this.NBAv3StatsClient = new NBAv3StatsClient(apiKeys.NBAv3StatsClient);
        this.NBAv3OddsClient = new NBAv3OddsClient(apiKeys.NBAv3OddsClient);
        this.NHLv2Client = new NHLv2Client(apiKeys.NHLv2Client);
        this.NHLv3PlayByPlayClient = new NHLv3PlayByPlayClient(apiKeys.NHLv3PlayByPlayClient);
        this.NHLv3ProjectionsClient = new NHLv3ProjectionsClient(apiKeys.NHLv3ProjectionsClient);
        this.NHLv3ScoresClient = new NHLv3ScoresClient(apiKeys.NHLv3ScoresClient);
        this.NHLv3StatsClient = new NHLv3StatsClient(apiKeys.NHLv3StatsClient);
        this.NHLv3OddsClient = new NHLv3OddsClient(apiKeys.NHLv3OddsClient);
        this.CFBv3ScoresClient = new CFBv3ScoresClient(apiKeys.CFBv3ScoresClient);
        this.CFBv3StatsClient = new CFBv3StatsClient(apiKeys.CFBv3StatsClient);
        this.CFBv3OddsClient = new CFBv3OddsClient(apiKeys.CFBv3OddsClient);
        this.CFBv3ProjectionsClient = new CFBv3ProjectionsClient(apiKeys.CFBv3ProjectionsClient);
        this.CBBv2Client = new CBBv2Client(apiKeys.CBBv2Client);
        this.CBBv3ScoresClient = new CBBv3ScoresClient(apiKeys.CBBv3ScoresClient);
        this.CBBv3StatsClient = new CBBv3StatsClient(apiKeys.CBBv3StatsClient);
        this.CBBv3OddsClient = new CBBv3OddsClient(apiKeys.CBBv3OddsClient);
        this.Golfv2Client = new Golfv2Client(apiKeys.Golfv2Client);
        this.NASCARv2Client = new NASCARv2Client(apiKeys.NASCARv2Client);
        this.Soccerv2Client = new Soccerv2Client(apiKeys.Soccerv2Client);
        this.Soccerv3ProjectionsClient = new Soccerv3ProjectionsClient(apiKeys.Soccerv3ProjectionsClient);
        this.Soccerv3ScoresClient = new Soccerv3ScoresClient(apiKeys.Soccerv3ScoresClient);
        this.Soccerv3StatsClient = new Soccerv3StatsClient(apiKeys.Soccerv3StatsClient);
        this.Soccerv3OddsClient = new Soccerv3OddsClient(apiKeys.Soccerv3OddsClient);
    }

}

module.exports = FantasyDataClient;

