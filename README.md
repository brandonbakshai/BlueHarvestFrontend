# important

This repo is an absolute mess. The only part of it that I'm currently making any use of is the index.html, where all the angular code
is embedded. Obviously the plan is to expand out and modularize and put everything in its proper place. For now, I kept the directory
structure of this angularjs skeleton app. Feel free to clean things up.

## Brandon-specific

How can I proceed incrementally and most effectively with the project

Given that I have a design:
    Overall container
        news controller -> bounty controller -> chat

First thing I need to do is create the fake data for bounties
Then I can use that fake data to filter on
Then I need to design the filtering scheme


Refinement will be of three types: view, sort, and filter.
View has two options only, which is bounty view of project view
Sort will have two sets of options, one being accending/descending and the other being by what metric to sort
Filter will simply have tags that are entered by the user

