# theslipbar
The Slip Bar &amp; Eatery website

Capstone Project Proposal:

For my capstone project, I am going to integrate with a website commission for a client. The client is The Slip Bar and Eatery; a sports bar with two locations in Redondo Beach, CA and Lomita, CA. I have already been working as their social media assistant for their Instagram page. The website should be very basic; the homepage should simply contain two links for each location, which will have their separate menus for Food, Drinks, and Specials (ie; Breakfast Burritos Saturday/Sunday, Chilli Mondays, Taco Tuesday, Pizza Thursdays). Since there is a rush to build the page, all the menus will be in PDF and in a single page (no subpages). The main homepage will contain a navigation bar consisting of the following pages: About, Live Music, Merchandise (swag), Jobs, The Live Music page will contain the API for Tockify; a popular calendar app used by many restaurants. 

The website needs to be easy to maintain and update for future integrations, such as online ordering and pickup and delivery via Doordash or UberEats. The PDF menus will eventually be replaced by the interactive third-party menu provider, Toast. 

# theslipbar.sql
This is the database schema. The locations table is directly associated with the restaurants table through the foreign key restaurant_id. This allows you to have multiple locations for a single restaurant.

The events table is associated with the specific location where the event is taking place, using the foreign key location_id. This way, events are linked to a specific location, which, in turn, is associated with a particular restaurant.

This structure allows you to have a restaurant with multiple locations, and events are associated with those specific locations. You can further customize the schema based on your specific needs and business requirements.
