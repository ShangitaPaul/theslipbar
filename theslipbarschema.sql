-- Create a table for restaurants
CREATE TABLE restaurants (
    restaurant_id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    -- Add other relevant fields for your restaurants
);

-- Create a table for locations
CREATE TABLE locations (
    location_id INT PRIMARY KEY,
    restaurant_id INT,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255),
    -- Add other relevant fields for your locations
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id)
);

-- Create a table for events
CREATE TABLE events (
    event_id INT PRIMARY KEY,
    location_id INT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    start_time DATETIME,
    -- Add other relevant fields for your events
    FOREIGN KEY (location_id) REFERENCES locations(location_id)
);
