Feature: DataBase SQL query Feature Scenario
@TestDatabase
Scenario: Execute all information from Actor Table
Given User connects to PosgreSql database 
When User sends query 'select * from public.actor'
And User clicks on 'iphone'
Then User should get all information from that table 